import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { ORANGE } from '../styles/colors'
import Navigation from './nav'
import Logo from '../icons/logo'

type Props = {}

const HeaderContainer = styled.header`
  position: sticky;
  top: -168px;
  width: 100%;
  margin-bottom: 12px;
  z-index: 10;
  background-color: white;
`

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled(Section)`
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  max-width: 1140px;
  padding-bottom: 16px;
  margin: 0 auto;
  border-bottom: 2px solid ${ORANGE};
`

const LogoContainer = styled(Section)`
  height: 168px;

  a {
    transition: transform 250ms ease-out;
  }

  a:hover {
    transform: scale(1.1);
    transform-origin: center;
  }

  a svg {
    height: 120px;
  }
`

const NavigationContainer = styled(Section)`
  padding: 0 32px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <LogoContainer>
          <Link href="/">
            <a>
              <Logo color={ORANGE} hoverColor={ORANGE} />
            </a>
          </Link>
        </LogoContainer>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
        <Section />
      </Container>
    </HeaderContainer>
  )
}

export default Header
