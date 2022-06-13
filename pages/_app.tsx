import "react-responsive-carousel/lib/styles/carousel.min.css"
import React from "react"
import App from "next/app"
import Head from "next/head"
import { ProvideAuth } from "../src/hooks/use-firebase"
import { ProviderLang } from "../src/hooks/use-lang"
import DefaultStyle from "../src/styles/global"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ProvideAuth>
        <ProviderLang>
          <Head>
            <meta
              key="viewport"
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <DefaultStyle />
          <Component {...pageProps} />
        </ProviderLang>
      </ProvideAuth>
    )
  }
}
