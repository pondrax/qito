export const prerender = false

export async function load({ params }) {
  return {
    coba: 1,
    slug: params.slug
  }
}