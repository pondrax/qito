import { db } from "$lib/db";

export async function load() {
  return {
    authProviders: (await db.collection('users').listAuthMethods()).authProviders
  }
}