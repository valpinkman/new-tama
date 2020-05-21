import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { ORANGE } from '../styles/colors'
import Navigation from './_nav'
import Logo from '../icons/logo'
import LogoRound from '../icons/logo/round'
import { useMedia } from '../hooks/use-match-media'

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

  @media screen and (max-width: 700px) {
    padding-bottom: 0;
  }
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

  @media screen and (max-width: 700px) {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    a svg {
      height: 38px;
    }

    a:active {
      transform: scale(1.1);
      transform-origin: center;
    }
  }
`

const NavigationContainer = styled(Section)`
  padding: 0 32px;

  @media screen and (max-width: 700px) {
    /* display: none; */
    flex-direction: column;

  }
`

const Header = () => {
  const size = useMedia(['(max-width: 700px)', '(min-width: 700px)'], ['small', 'big'], 'big')

  return (
    <HeaderContainer>
      <Container>
        <LogoContainer>
          <Link href="/">
            <a>
              {size === 'small' ?
                <Logo color={ORANGE} hoverColor={ORANGE} /> :
                <LogoRound color={ORANGE} />
              }
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
