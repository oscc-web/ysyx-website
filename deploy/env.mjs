import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'

const [bin, entry] = process.argv

export const PROJECT_ROOT = resolve(dirname(entry), '../')

export const PROJECT_VAR = resolve(PROJECT_ROOT, 'var')

export const PACKAGE = JSON.parse(
	readFileSync(resolve(PROJECT_ROOT, 'package.json'))
)

export const { deploy } = PACKAGE

if (!deploy) throw new Error('Cannot find entry "deploy" in project package.json')

export const session = new class {
	get path() { return resolve(PROJECT_VAR, 'session.json') }
	get last() {
		return this.data.last
	}
	get domainList() {
		return Object.keys(this.data.domain)
	}
	getCookie(domain) {
		const sessionCookie = this.data.domain[domain]
		if (sessionCookie) {
			return Object
				.entries(sessionCookie)
				.map(arr => arr.join('='))
				.join('; ')
		} else return undefined
	}
	setCookie(domain, ...setHeader) {
		const data = { ...this.data, last: domain }
		data.domain[domain] = Object.fromEntries(
			setHeader.map(el => {
				const
					[body] = el.split(';'),
					[key, val] = body.split('=', 2)
				return [key, val]
			})
		)
		writeFileSync(this.path, JSON.stringify(data, null, '\t'))
	}
	get data() {
		const template = {
			last: undefined,
			domain: {}
		}
		try {
			return {
				...template,
				...JSON.parse(readFileSync(this.path))
			}
		} catch (e) {
			return template
		}
	}
}
