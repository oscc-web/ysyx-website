import { PROJECT_ROOT } from './env.mjs'
import { exec, read } from './utils.mjs'

export default async function checkGit() {
	const status = (await exec(
		`cd ${PROJECT_ROOT}`,
		'git status --porcelain'
	)).trim()
	if (status) {
		console.log(`
_____________________________________________
__        ___    ____  _   _ ___ _   _  ____ 
╲ ╲      / / ╲  |  _ ╲| ╲ | |_ _| ╲ | |/ ___|
 ╲ ╲ /╲ / / _ ╲ | |_) |  ╲| || ||  ╲| | |  _ 
  ╲ V  V / ___ ╲|  _ <| |╲  || || |╲  | |_| |
   ╲_/╲_/_/   ╲_╲_| ╲_╲_| ╲_|___|_| ╲_|╲____|
─────────────────────────────────────────────
The repo has uncommitted/untracked changes:
${
	status
		.split('\n')
		.map(str => str.trim())
		.map(str => str[{
			'M': 'yellow',
			'U': 'green',
			'D': 'red'
		}[str[0]] || 'dim'])
		.join('\n')
}
─────────────────────────────────────────────
You are suggested to clean up the repo before deploy.
If you are aware of this and still want to continue,
please type 'dirty repo' in UPPERCASE.
─────────────────────────────────────────────
		`.trim().replace('╲', '\\').red)
		while (!/^DIRTY[\s_-]REPO/g.test(await read('CONFIRM: ')));
		console.log(`
		
─────────────────────────────────────────────
`.trim())
	}
}
