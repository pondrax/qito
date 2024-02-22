export const prerender = true
export const trailingSlash = 'always'

export async function load({ cookies }) {
  return {
    lang: cookies.get('lang')
  }
}