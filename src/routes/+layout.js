import { loadTranslations } from '$lib/lang';

// const pages = Object.keys(import.meta.glob('./**/+page.svelte'))
//   .map(key => key.replace(/\.|\+page\.svelte/g, ''))

export async function load({ url, data }) {
  const { pathname } = url;

  const initLocale = data.lang || 'en'; // get from cookie, user session, ...

  await loadTranslations(initLocale, pathname); // keep this just before the `return`

  return {
    // pages
  }
}