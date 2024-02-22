import { redirect } from "@sveltejs/kit"
import { db } from '$lib/db'
import { browser } from '$app/environment'

const getPages = Promise.all(Object.entries(import.meta.glob('./**/+page.svelte'))
  .map(async ([key, fn]) => {
    /** @type {any} */
    const config = await fn()
    if (!config.hidden) {
      return key.replace(/\.|\+page\.svelte/g, '')
    }
  }))

export async function load() {
  let pages = (await getPages).filter(Boolean)
  if (browser) {
    console.log('client layout', db.authStore.isValid)
    if (!db.authStore.isValid) {
      throw redirect(302, '/')
    }
    console.log(pages)
  }
  return {
    pages
  }
}