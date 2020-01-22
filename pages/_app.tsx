import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import { ProvideAuth } from '../src/hooks/use-firebase'
import { ProviderLang } from '../src/hooks/use-lang'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (

      <ProvideAuth>
        <ProviderLang>
          <Component {...pageProps} />
        </ProviderLang>
      </ProvideAuth>

    )
  }
}
