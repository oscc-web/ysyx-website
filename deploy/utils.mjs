import 'colors'
import { exec as _exec, spawn as _spawn } from 'child_process'
import { createInterface } from 'readline'

export async function exec(...args) {
	const cmd = args.map(str => str.trim()).join(' && ')
	// console.log(cmd.underline)
	return await new Promise((res, rej) => {
		_exec(cmd, { cwd: PROJECT_ROOT }, (e, stdout, stderr) => {
			if (e) rej(e)
			else if (stderr) rej(new Error(stderr))
			else res(stdout)
		})
	})
}

export async function spawn(cmd, ...args) {
	// console.log(cmd.underline)
	return await new Promise((res, rej) => {
		const proc = _spawn(cmd, args, { cwd: PROJECT_ROOT })
		proc.stdout.pipe(process.stdout)
		proc.stderr.pipe(process.stderr)
		proc.on('exit', code => { if (code) rej(); else res() })
	})
}

export async function read(prompt, password = false, optional = false) {
	const rlInterface = createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: true
	})
	if (password) rlInterface._writeToOutput = str => {
		if (/^[a-z0-9,.<>/?;:'"([{}\])\\=+\-_|*&^%$#@!~`]$/gi.test(str)) process.stdout.write('*')
		else if (str.startsWith(prompt)) {
			process.stdout.write(prompt.padEnd(str.length, '*'))
		} else process.stdout.write(str)
	}
	return await new Promise(
		(res, rej) => rlInterface.question(prompt, res)
	)
		.then(str => {
			rlInterface.close()
			return str
		})
}

import crypto from 'crypto'
import { PROJECT_ROOT } from './env.mjs'
export function hash(content, method = 'sha256', format = 'hex') {
	return crypto.createHash(method).update(content).digest(format)
}
