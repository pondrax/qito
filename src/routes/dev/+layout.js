import { redirect } from "@sveltejs/kit"
import { db } from '$lib/db'
import { browser } from '$app/environment'

const pages = Object.keys(import.meta.glob('./**/+page.svelte'))
  .map(key => key.replace(/\.|\+page\.svelte/g, ''))

export async function load() {
  if (browser) {
    console.log('client layout', db.authStore.isAdmin)
    if (!db.authStore.isAdmin) {
      throw redirect(302, '/auth/dev')
    }
  }
  return {
    pages
  }
}