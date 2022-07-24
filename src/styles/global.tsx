import React from "react"
import { Normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    height: 100vh;
    font-family: sans-serif;
  }

  .slider-wrapper {
    border-radius: 16px;
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
