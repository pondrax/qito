import { browser } from '$app/environment';
import i18n from 'sveltekit-i18n';


function loaders() {
  const path = 'lang'
  return Object.entries(import.meta.glob('../lang/**/*.json')).map(([keyPath, loader]) => {
    const pattern = new RegExp(`/${path}/([^/]+)(?:/([^/.]+))?\\.json$`)
    const [, locale, key] = keyPath.match(pattern) || []
    return {
      locale,
      key: key || '',
      loader
    }
  });
}

/**
 * Configuration for i18n module.
 * @type {import('sveltekit-i18n').Config<any>}
 */
const config = ({
  // @ts-ignore
  loaders: loaders()
  // loaders: [
  //   {
  //     locale: 'en',
  //     key: '',
  //     loader: async () => (
  //       await import('../lang/en.json')
  //     ).default,
  //   },
  // ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

locale.subscribe((lang) => {
  if (lang && browser) {
    document.cookie = `lang=${lang}; path=/`
  }
})