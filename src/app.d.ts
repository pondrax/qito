// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import PocketBase from 'pocketbase'
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			db: PocketBase
		}
		// interface PageData {}
		// interface Platform {}
	}

	namespace svelteHTML {
		import type { AttributifyAttributes } from '@unocss/preset-attributify'
		type HTMLAttributes = AttributifyAttributes;
	}
}

export { };
