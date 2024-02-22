import { writable } from 'svelte/store';

/** @type {import('svelte/store').Writable<import('pocketbase').AuthModel>} */
export const user = writable();

/** @type {import('svelte/store').Writable<Record<string,any>[]>} */
export const toast = writable([]);
// Page load
export const pageLoading = writable(true);
// API load
export const loading = writable(true);

toast.subscribe((alerts) => {
	alerts.forEach((alert, i) => {
		if (!alert.error) {
			setTimeout(() => (toast.set([])), 3000);
		}
	});
})