import React, { createContext, useContext, useState, useEffect } from 'react'

import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCYfTDg8b79P24iGN0DQbw6YNeL2tj5kuE',
  authDomain: 'tama-v2-test.firebaseapp.com',
  databaseURL: 'https://tama-v2-test.firebaseio.com',
  projectId: 'tama-v2-test',
  storageBucket: 'tama-v2-test.appspot.com',
  messagingSenderId: '958449183639',
  appId: '1:958449183639:web:c98fbb92eb669206',
}

// const config = {
//   apikey: process.env.FB_API_KEY,
//   authDomain: process.env.FB_AUTH_DOMAIN,
//   databaseURL: process.env.DB_URL,
//   projectId: process.env.FB_PROJECT_ID,
//   storageBucket: process.env.FB_STORAGE_BUCKET,
//   messagingSenderId: process.env.FB_MESSENGER_SENDER_ID,
//   appId: process.env.FB_APP_ID,
// }

const initFirebase = () => {
  if (firebase.apps.length > 0) return

  firebase.initializeApp(config)
}

initFirebase()

const firebaseContext = createContext<firebase.app.App>(firebase.app())

export const useFirebase = () => {
  return useContext(firebaseContext)
}

interface Context {
  user: firebase.User | null;
  signin: (email: string, password: string) => Promise<firebase.User | null>;
  signup: (email: string, password: string) => Promise<firebase.User | null>;
  signout: () => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<boolean>;
  confirmPasswordReset: (code: string, password: string) => Promise<boolean>;
}

const authContext = createContext<Context | null>(null)

export const useAuth = () => {
  return useContext(authContext)
}

export const useProvideAuth = () => {
  const [user, setUser] = useState<firebase.User | null>(null)

  const signin = async (email: string, password: string) => {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

    setUser(response.user)
    return response.user
  }

  const signup = async (email: string, password: string) => {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)

    setUser(response.user)
    return response.user
  }

  const signout = async () => {
    await firebase.auth().signOut()
    setUser(null)
  }

  const sendPasswordResetEmail = async (email: string) => {
    await firebase.auth().sendPasswordResetEmail(email)
    return true
  }

  const confirmPasswordReset = async (code: string, password: string) => {
    await firebase.auth().confirmPasswordReset(code, password)
    return true
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }

      return () => unsubscribe()
    })
  }, [setUser])

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  }
}

interface Props {
  children: React.ReactNode;
}

export const ProvideAuth = ({ children }: Props) => {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
