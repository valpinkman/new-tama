import React from 'react'
import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  html,
  body {
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

class MyDocument extends Document<any> {
  constructor(props: any) {
    super(props)
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html prefix="og: http://ogp.me/ns#">
        <Head>
          <meta
            key="viewport"
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta key="charset" charSet="utf-8" />

          <Normalize />
          <GlobalStyle />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
