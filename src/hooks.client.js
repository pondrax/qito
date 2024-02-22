import { goto } from '$app/navigation';

/** @type {import('@sveltejs/kit').HandleClientError} */
export async function handleError(error) {
	try {

		console.log(error)
		// const errorId = crypto.randomUUID();

		// goto('/404');
	} catch (e) {
		//
	}
}