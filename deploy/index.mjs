import 'colors'
import { exec as _exec } from 'child_process'
import { PROJECT_ROOT, PROJECT_VAR, session } from './env.mjs'
import { read, exec, spawn } from './utils.mjs'
import { ensureLogin, upload } from './api.mjs'
import checkGit from './checkGit.mjs'
import { existsSync, writeFileSync } from 'fs'
import { resolve } from 'path'
const distPath = 'var/dist', tarballPath = 'var/dist.tgz'
// console.log(await exec('pwd', `ls ${resolve(PROJECT_ROOT, 'var')}`))
// Check local repo
await checkGit()

// Select deployment target
const { last, domainList } = session
console.log(`List of previously used domains:
${
	domainList
		.map((d, i) => d === last
			? `[${i}] `.dim + d.underline + ' (last used)'.dim
			: `[${i}] `.dim + d
		)
		.join('\n')
}
─────────────────────────────────────────────
`.trim())
const _domain = await read('Select or input the domain to deploy (default: last used): ') || session.last,
	domain = domainList[_domain] || _domain
console.log(`> Selected ${domain}`.green)
if (!domain) throw new Error('You have to enter a domain to proceed')

// Run build script and inject git tag to the dist
console.log(`
─────────────────────────────────────────────
Building the project
`.trim())
await spawn('npm', 'run', 'build-deploy')

// Write distribution info into the dist folder
console.log(`
─────────────────────────────────────────────
Writing distribution metadata
`.trim())
const gitHash = await exec('git describe --always --dirty')
console.log(`> ${`[HASH] ${gitHash}`.underline}`.green)
writeFileSync(
	resolve(PROJECT_VAR, 'dist/VERSION'),
	`[HASH] ${gitHash}`
)

// Make tarball for upload
console.log(`
─────────────────────────────────────────────
Creating tarball
`.trim())
if (existsSync(resolve(PROJECT_ROOT, tarballPath))) await exec(
	`rm -f ${tarballPath}`
)
await spawn('tar', 'czvf', tarballPath, '-C', distPath, '.')
console.log('> tarball created'.green)
console.log(`> ${await exec(`file ${tarballPath}`)}`.dim)

// Check user login state for this domain
console.log(`
─────────────────────────────────────────────
Uploading to deployment server
`.trim())
await ensureLogin(domain)
// Upload
if (await upload(domain, resolve(PROJECT_ROOT, tarballPath))) console.log(`
_____________________________________________
      ____      ___     _   _    _____
     |  _ ╲    / _ ╲   | ╲ | |  | ____|
     | | | |  | | | |  |  ╲| |  |  _|
     | |_| |  | |_| |  | |╲  |  | |___
     |____/    ╲___/   |_| ╲_|  |_____|
─────────────────────────────────────────────
	`.trim().green)
