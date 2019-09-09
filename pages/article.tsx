import React, { useEffect } from 'react'

const Article = (props: any) => {
  useEffect(() => {
    console.log(props)
  })

  return (
    <h1>Article</h1>
  )
}

Article.getInitialProps = async ({ query }: { query: any }) => {
  console.log(query)
  return {
    page: 'article',
    slug: query.slug
  }
}

export default Article
