import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Article = (props: any) => {
  const router = useRouter()

  useEffect(() => {
    console.log(props)
    console.log(router)
  })

  return <h1>Fraiche {router.query.slug}</h1>
}

Article.getInitialProps = async () => {
  return {
    page: 'fraiche',
  }
}

export default Article
