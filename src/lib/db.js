import { PUBLIC_BASEDEV_URL, PUBLIC_BASE_URL } from '$env/static/public'
import PocketBase from 'pocketbase'
import { dev, browser } from '$app/environment'
import { user, toast } from '$lib/store'
export const db = new PocketBase(dev ? PUBLIC_BASEDEV_URL : PUBLIC_BASE_URL)


db.authStore.onChange((token, model) => {
  console.log('client', model)
  user.set(model)
  if (browser) {
    document.cookie = db.authStore.exportToCookie({ httpOnly: false })
  }
}, true)

export const auth = {
  /**
   * @param {string} email
   * @param {string} password
   */
  async login(email, password) {
    let authResponse;
    try {
      authResponse = await db.collection('users').authWithPassword(email, password, {
        expand: 'role'
      });
    } catch (e) {
      // console.log(authResponse)
    }

    return authResponse
  },

  async logout() {
    db.authStore.clear()

  },
  /**
   * @param {string} name
   */
  async provider(name) {
    const authResponse = await db.collection('users').authWithOAuth2({
      provider: name,
      expand: 'role',
      createData: {},
      urlCallback: (url) => {
        window.open(url + '&prompt=consent', '_blank');
        // console.log(url)
      }
    });

    return authResponse;
  }
}

export async function submit(/** @type {SubmitEvent} */ { target }) {
  let response, error;
  if (target instanceof HTMLFormElement) {
    const collectionName = String(target.action.split('?/').pop())
    const form = new FormData(target);
    try {
      if (form.get('id')) {
        response = await db.collection(collectionName).update(String(form.get('id')), form)
      } else {
        response = await db.collection(collectionName).create(form)
      }
    } catch (e) {
      // @ts-ignore
      error = Object.keys(e.data.data).length > 0 ? e.data.data : e.message;
      toast.set([{ error }]);
    }
    target.reset()
  }
  return response;
}