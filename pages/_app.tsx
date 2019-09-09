import React from 'react'
import App, { Container } from 'next/app'

import { ProvideAuth } from '../src/hooks/use-firebase'
import { ProviderLang } from '../src/hooks/use-lang'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ProvideAuth>
          <ProviderLang>
            <Component {...pageProps} />
          </ProviderLang>
        </ProvideAuth>
      </Container>
    )
  }
}
