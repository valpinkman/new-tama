import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useRouter } from "next/router"
import Link from "next/link"
import { useLang } from "../../hooks/use-lang"
import { Lang } from "../../../types/lang"
import routes, { Routes, Route } from "../../utils/routes"
import { DARK_GRAY, GREEN } from "../../styles/colors"
import useMatchMedia from "../../hooks/use-match-media"

const omitted = [
  "article",
  "signin",
  "fresh",
  "signup",
  "product",
  "news",
  "pro",
  "shop",
]
const withOmitted = (lang: Lang, routes: Routes) =>
  routes[lang].filter((route: Route) => !omitted.includes(route.key))

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
`

const A = styled.a<{ active?: boolean }>`
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  color: ${(p) => (p.active ? GREEN : DARK_GRAY)};
  transition: color ease-out 300ms;

  &:hover {
    color: ${GREEN};
  }
`

function NavDesktop({
  nav,
}: {
  nav: Array<{ src: string; title: string; key: string }>
}) {
  const router = useRouter()

  return (
    <Wrapper>
      {nav.map(
        ({ src, title, key }: { src: string; title: string; key: string }) => (
          <React.Fragment key={key}>
            <Link href={src}>
              <A active={router.asPath === src}>{title}</A>
            </Link>
          </React.Fragment>
        ),
      )}
    </Wrapper>
  )
}

const WrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
`

function NavMobile({
  nav,
}: {
  nav: Array<{ src: string; title: string; key: string }>
}) {
  const router = useRouter()
  return <WrapperMobile></WrapperMobile>
}

function Nav() {
  const small = useMatchMedia("(max-width: 900px)")
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

  // return small ? <NavMobile nav={nav} /> : <NavDesktop nav={nav} />
  return <NavDesktop nav={nav} />
}

export default Nav
