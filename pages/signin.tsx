import React, { useEffect } from 'react'

const Login = (props: any) => {
  useEffect(() => {
    console.log(props)
  })

  return (
    <h1>Sign in</h1>
  )
}

Login.getInitialProps = async () => {
  return {
    page: 'sign in',
  }
}

export default Login
