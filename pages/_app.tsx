import "react-responsive-carousel/lib/styles/carousel.min.css"
import React from 'react'
import App from 'next/app'
import { ProvideAuth } from '../src/hooks/use-firebase'
import { ProviderLang } from '../src/hooks/use-lang'
import DefaultStyle from '../src/styles/global'



export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ProvideAuth>
        <ProviderLang>
          <DefaultStyle />
          <Component {...pageProps} />
        </ProviderLang>
      </ProvideAuth>
    )
  }
}
