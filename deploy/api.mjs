import { createReadStream, readFileSync, statSync } from 'fs'
import https from 'https'
import { session, deploy } from './env.mjs'
import { read, hash } from './utils.mjs'

const
	httpsArgs = {},
	{ ca } = Object.fromEntries(
		process.argv
			.map(str => {
				const [key, ...val] = str.split('=')
				if (val.length) return [key, val.join('=')]
			})
			.filter(el => el)
	)

if (ca) https.globalAgent.options.ca = readFileSync(ca)
// console.log({ ca }, httpsArgs)

export async function ensureLogin(host) {
	while (!await checkLogin(host)) await login(host)
	console.log(`> Logged into ${host} successfully`.green)
}

export async function checkLogin(host) {
	const cookie = session.getCookie(host)
	if (cookie) return await new Promise((res, rej) => {
		https
			.request(
				{
					method: 'POST',
					host,
					path: '/login',
					headers: { cookie }
				},
				response => res(response.statusCode < 400)
			)
			.on('error', rej)
			.end()
	})
	else return false
}

export async function login(host) {
	console.log(`Login requested to proceed deploying to ${host}`.yellow)
	const payload = {
		persistent: true,
		login: await read('ID/mail: ', false),
		password: hash(await read('password: ', true))
	}
	console.log(`Trying to login as User <${payload.login}>`.dim)
	await new Promise((res, rej) => {
		https
			.request(
				{
					method: 'POST',
					host,
					path: '/login',
					headers: {
						'Content-Type': 'application/json'
					}
				},
				response => {
					const
						ok = response.statusCode < 400,
						setCookie = response?.headers?.['set-cookie']
					if (ok && setCookie) session.setCookie(host, ...setCookie)
					else {
						let text = ''
						response.on('data', chunk => text += chunk)
						response.on('end', () =>
							console.log(`Login FAILED (${response.statusCode}): ${text.underline}`.red)
						)
					}
					res(ok)
				}
			)
			.on('error', rej)
			.end(JSON.stringify(payload))
	})
}

export async function upload(_host, distPath) {
	const path = `/deploy/${deploy}`,
		host = `upload.${_host}`,
		method = 'PUT',
		cookie = session.getCookie(_host)
	console.log(`> ${method} https://${host}${path}`.green)
	const stream = createReadStream(distPath),
		{ size } = statSync(distPath)
	console.log(`> Total size: ${size}`.green)
	await new Promise(r => stream.on('open', r))
	return await new Promise((res, rej) => {
		stream.pipe(
			https
				.request(
					{
						method,
						host,
						path,
						headers: {
							'Content-Type': 'application/tar+gzip',
							'Content-Length': size,
							cookie
						}
					},
					response => {
						const ok = response.statusCode < 400
						if (ok) res(true)
						else {
							let text = ''
							response.on('data', chunk => text += chunk)
							response.on('end', () => {
								console.log(`Upload FAILED (${response.statusCode}): ${text.underline}`.red)
								res(false)
							})
						}
					}
				)
				.on('error', rej),
			{ end: true }
		)
	})
}
