import React, { useEffect } from 'react'

const About = (props: any) => {
  useEffect(() => {
    console.log(props)
  })

  return (
    <h1>About</h1>
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
