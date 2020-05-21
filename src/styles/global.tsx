import React from 'react'
import { Normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    height: 100%;
    font-family: Inter;
  }

  .slider-wrapper {
    border-radius: 16px;
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 400;
    font-display: swap;
    src: url("static/fonts/inter/Inter-Regular.woff2?v=3.13") format("woff2"),
        url("static/fonts/inter/Inter-Regular.woff?v=3.13") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 400;
    font-display: swap;
    src: url("static/fonts/inter/Inter-Italic.woff2?v=3.13") format("woff2"),
        url("static/fonts/inter/Inter-Italic.woff?v=3.13") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 500;
    font-display: swap;
    src: url("static/fonts/inter/Inter-Medium.woff2?v=3.13") format("woff2"),
        url("static/fonts/inter/Inter-Medium.woff?v=3.13") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 500;
    font-display: swap;
    src: url("static/fonts/inter/Inter-MediumItalic.woff2?v=3.13") format("woff2"),
        url("static/fonts/inter/Inter-MediumItalic.woff?v=3.13") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 600;
    font-display: swap;
    src: url("static/fonts/inter/Inter-SemiBold.woff2?v=3.13") format("woff2"),
        url("static/fonts/inter/Inter-SemiBold.woff?v=3.13") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 600;
    font-display: swap;
    src: url("static/fonts/inter/Inter-SemiBoldItalic.woff2?v=3.13") format("woff2"),
        url("static/fonts/inter/Inter-SemiBoldItalic.woff?v=3.13") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 700;
    font-display: swap;
    src: url("static/fonts/inter/Inter-Bold.woff2?v=3.13") format("woff2"),
        url("static/fonts/inter/Inter-Bold.woff?v=3.13") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 700;
    font-display: swap;
    src: url("static/fonts/inter/Inter-BoldItalic.woff2?v=3.13") format("woff2"),
        url("static/fonts/inter/Inter-BoldItalic.woff?v=3.13") format("woff");
  }
`

function DefaultStyle() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
    </>
  )
}

export default DefaultStyle