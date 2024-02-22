import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event);
	if (response.status === 404) {
		throw redirect(307, '/404');
	}
	return response;
}

// /** @type {import('@sveltejs/kit').HandleClientError} */
// export async function handleError({ error, event }) {
// 	try {

// 		console.log(error, event.)
// 		// const errorId = crypto.randomUUID();

// 		// goto('/404');
// 	} catch (e) {
// 		//
// 	}
// }