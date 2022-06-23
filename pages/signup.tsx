import React, { useEffect } from 'react'

const Signup = (props: any) => {
  useEffect(() => {
    console.log(props)
  })


  return (
    <h1>Sign Up</h1>
  )
}

Signup.getInitialProps = async () => {
  return {
    page: "signup"
  }
}

export default Signup