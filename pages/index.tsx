import React, { useEffect } from 'react'

import { useChangeLang } from '../src/hooks/use-lang'

import { getPosts } from '../src/services/wordpress'
import Layout from '../src/components/layout'
import Sign from '../src/components/user/sign'

const Index = () => {
  const { lang, changeLang } = useChangeLang()

  useEffect(() => {
    getPosts().then(console.log)
  }, [])

  return (
    <Layout>
      <h1>Hello World</h1>
      <span>Lang: {lang}</span>
      <div>
        <h4>change lang</h4>
      </div>
      <button onClick={() => changeLang('fr')}>fr</button>
      <button onClick={() => changeLang('it')}>it</button>
      <button onClick={() => changeLang('en')}>en</button>
      <div>
        <Sign />
      </div>
    </Layout>
  )
}

export default Index
