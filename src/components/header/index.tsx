import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { ORANGE, GREEN } from '../../styles/colors'
import Logo from '../../icons/logo'
import Nav from './nav'
import LanguageSwitcher from './lang-switcher'

const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
  background-color: white;
  z-index: 1000;
`

const NavWrapper = styled.div`
  margin-left: auto;
`

const LogoContainer = styled.div`
  width: 96px;
  cursor: pointer;
`

function Header() {
  return (
    <Container>
      <Link href="/">
        <LogoContainer>
          <Logo color={ORANGE} hoverColor={GREEN} />
        </LogoContainer>
      </Link>
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <LanguageSwitcher />
    </Container>
  )
}

export default Header