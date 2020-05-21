import React, { useEffect } from 'react'
import Layout from '../src/components/layout'

const About = (props: any) => {
  useEffect(() => {
    console.log(props)
  })

  return (
    <Layout>
      <h1>About</h1>
    </Layout>
  )
}

About.getInitialProps = async () => {
  await new Promise(res => {
    setTimeout(() => res(), 5000)
  })
  return {
    page: 'about',
  }
}

export default About
