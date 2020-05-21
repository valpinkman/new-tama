import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { Lang } from '../../types/lang'
import routes, { Routes } from '../utils/routes'
import { ORANGE, DARK_GRAY, GREEN, GOLD } from '../styles/colors'
import { useLang } from '../hooks/use-lang'

const omitted = ['article', 'signin', 'fresh', 'signup', 'product']
const withOmitted = (lang: Lang, routes: Routes) =>
  routes[lang].filter(route => !omitted.includes(route.key))

const Separator = styled.span<{ color?: string }>`
  color: ${p => p.color || GREEN};
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  padding: 0 8px;
`

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const A = styled.a<{ light?: boolean; gold?: boolean; pro?: boolean; active?: boolean }>`
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  line-height: 28px;
  ${p => p.light
    ? `
      padding: 0 4px;
      margin: 0 4px;
    `
    : ''
}
  color: ${p => p.gold ? GOLD : p.light ? 'white' : DARK_GRAY};

  &:visited {
    color: ${p => p.gold ? GOLD : p.light ? 'white' : DARK_GRAY};
  }

  ${p => p.active ? `
    color: ${p.gold ? GOLD : p.light ? 'white' : ORANGE};
  `: ''}

  &:hover {
    color: ${p => p.gold ? GOLD : p.light ? 'white' : ORANGE};
  }

  ${p => p.pro ? `
    padding: 4px 12px;
    font-size: 16px;
    color: white;
    text-transform: uppercase;
    border-radius: 2px;
    background-color: ${GREEN};
    transition: background 250ms ease-out;

    &:hover {
      color: white;
      background-color: ${ORANGE};
    }
  ` : ''}

  ${p => p.pro && p.active ? `
    color: white;
    background-color: ${ORANGE};
  ` : ''}
`

type Props = {
  light?: boolean;
  gold?: boolean;
}

const Navigation = ({ light, gold }: Props) => {
  const router = useRouter()
  console.log(router)
  const lang = useLang()
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
    <Nav>
      {nav.map(({ src, title, key }, idx, arr) => (
        <React.Fragment key={key}>
          <Link href={src} prefetch>
            <A light={light} gold={gold}>
              {title}
            </A>
          </Link>
          {idx !== arr.length - 1 && !light ? (
            <Separator>/</Separator>
          ) : null}
        </React.Fragment>
      ))}
    </Nav>
  )
}


export default Navigation