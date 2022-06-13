import React,{ useEffect } from 'react'
import { getPosts } from '../../src/services/wordpress'
import Layout from '../../src/components/layout'

const Blog = (props: any) => {
  useEffect(() => {
    console.log(props)
  })

  return (
    <Layout>
      <h1>Blog</h1>
    </Layout>
  )
}

Blog.getInitialProps = async () => {
  try {
    const posts = await getPosts()
    return {
      page: 'blog',
      posts,
    }
  } catch (error) {
    console.log(error)
    return {
      page: 'blog',
      posts: [],
    }
  }

}

export default Blog
