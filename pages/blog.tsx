import React,{ useEffect } from 'react'

const Blog = (props: any) => {
  useEffect(() => {
    console.log(props)
  })

  return (
    <h1>Blog</h1>
  )
}

Blog.getInitialProps = async () => {
  return {
    page: 'blog',
  }
}

export default Blog
