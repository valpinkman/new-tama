import React from 'react'
import App from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { ProvideAuth } from '../src/hooks/use-firebase'
import { ProviderLang } from '../src/hooks/use-lang'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    height: 100%;
    font-family: sans-serif;
  }

  #__next {
    height: 100vh;
  }

  [class^="__next"] {
    height: 100vh;
  }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ProvideAuth>
        <ProviderLang>
          <Normalize />
          <GlobalStyle />
          <Component {...pageProps} />
        </ProviderLang>
      </ProvideAuth>
    )
  }
}
