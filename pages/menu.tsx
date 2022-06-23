import React from 'react'
import Layout from "../src/components/layout"
import Main from '../src/components/main'
import Img from '../src/components/img'

const Menu = () => {
  return (
    <Layout>
      <Main>
        <Img src="/static/images/menu/2021/menu-tamarindo-1.jpg" alt="menu tamarindo 2021 - light smoothies" />
        <Img src="/static/images/menu/2021/menu-tamarindo-2.jpg" alt="menu tamarindo 2021 - multivitamines" />
        <Img src="/static/images/menu/2021/menu-tamarindo-3.jpg" alt="menu tamarindo 2021 - yummy" />
        <Img src="/static/images/menu/2021/menu-tamarindo-4.jpg" alt="menu tamarindo 2021 - detox" />
      </Main>
    </Layout>
  )
}

export default Menu