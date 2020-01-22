import React, { useState, useCallback } from 'react'

import { useAuth } from '../../hooks/use-firebase'

const Sign = () => {
  const auth = useAuth()
  const [email, setEmail] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const [mode, setMode] = useState<'in' | 'up'>('in')

  const changeMode = useCallback(() => {
    setMode(mode === 'in' ? 'up' : 'in')
  }, [setMode, mode])

  const onChangeEmail = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.currentTarget.value)
  }, [setEmail])

  const onChangePass = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setPass(evt.currentTarget.value)
  }, [setPass])

  const signout = useCallback(async () => {
    if (auth) {
      await auth.signout()
    }
  }, [auth])



  const onSubmit = useCallback(() => {
    const signin = async () => {
      try {
        if (auth) {
          await auth.signin(email, pass)
        }
      } catch (error) {
        console.log(error)
      }
    }

    const signup = async () => {
      try {
        if (auth) {
          await auth.signup(email, pass)
        }
      } catch (error) {
        console.log(error)
      }
    }

    return mode === 'in' ? signin() : signup()
  }, [auth, mode, email, pass])

  return (
    <>
      {auth && auth.user ? (
        <div>
          {`Hello ${auth.user.email}`}
          <button onClick={signout}>signout</button>
        </div>
      ) : (
        <div>
          <input placeholder="email" type="email" onChange={onChangeEmail} />
          <input placeholder="password" type="password" onChange={onChangePass} />

          <button onClick={onSubmit}>{`${mode === 'in' ? 'signin' : 'signup'}`}</button>
          <button onClick={changeMode}>switch</button>
        </div>
      )}

    </>
  )
}
export default Sign