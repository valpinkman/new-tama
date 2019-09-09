import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { Lang, MaybeLang } from '../../../types/lang'
import routes, { Routes } from '../../utils/routes'

const omitted = ['product', 'fresh']
const withOmitted = (lang: Lang, routes: Routes) =>
  routes[lang].filter(route => !omitted.includes(route.key))

interface Props {
  children: React.ReactNode;
  lang: MaybeLang;
}

const A = styled.a`
  padding-right: 10px;
  cursor: pointer;
`

const Menu = ({ children, lang }: Props) => {
  const [nav, setNav] = useState(() => {
    if (lang) {
      const defaultState = withOmitted(lang, routes)
      return defaultState
    }

    return []
  })

  useEffect(() => {
    if (lang) {
      const newNav = withOmitted(lang, routes)
      setNav(newNav)
    }
  }, [lang, setNav])

  return (
    <>
      <nav>
        {nav.map(({ src, title, key }) => (
          <Link key={key} href={src}>
            <A href={src}>{title}</A>
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </>
  )
}

export default Menu
