import WpAPI from 'wpapi'

const wp = new WpAPI({
  endpoint:
    process.env.WORDPRESS_ENDPOINT ||
    'https://admin.smoothiestamarindo.com/wp-json',
})

export const getPosts = async () => {
  const fetched = await wp.posts().embed()
  return fetched
}

export const getLastPost = async () => {
  const fetched = await wp
    .posts()
    .perPage(1)
    .embed()
  return fetched
}

export const getSinglePostBySlug = async (slug: string) => {
  const fetched = await wp
    .posts()
    .slug(slug)
    .embed()
  return fetched
}

export const getSinglePostById = async (id: number) =>
  wp
    .posts()
    .id(id)
    .embed()

export const getCategories = async () => {
  const cat = await wp.categories()
  return cat
}

const getById = (id: string) => (x: { id: string }): boolean => x.id === id

export const getAuthor = (authors: Array<{ id: string }>, authorId: string) => authors.find(getById(authorId))

export const getFeaturedMedia = (featuredMedia: Array<{ source_url: string }> = []) =>
  featuredMedia.length ? featuredMedia[0].source_url : null

export const getCategoriesName = async (categories: Array<string>) => {
  const cat = await getCategories()
  return categories.map(category => cat.find(getById(category)).name)
}

export default wp
