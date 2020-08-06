import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { ORANGE, DARK_GRAY, GOLD, GREEN, PINK, FACEBOOK, TWITTER, INSTAGRAM, YOUTUBE } from '../src/styles/colors'
import Layout from '../src/components/layout'
import Sign from '../src/components/user/sign'
import Main from '../src/components/main'
import Title from '../src/components/title'
import { RoundImg } from '../src/components/img'
import Section from '../src/components/section'
import { useTranslations } from '../src/hooks/use-lang'
import { useProvideAuth } from '../src/hooks/use-firebase'
import { capitalize } from '../src/utils/string'
import Logo from '../src/icons/logo/round'
import Facebook from '../src/icons/drawn/facebook'
import Twitter from '../src/icons/drawn/twitter'
import Instagram from '../src/icons/drawn/instagram'
import Youtube from '../src/icons/drawn/youtube'
import useMatchMedia from '../src/hooks/use-match-media'

const Carousel = dynamic(
  () => import('../src/components/carousel'),
  { ssr: false }
)


const ImgTitle = styled.img`
  max-width: 48px;
  padding-right: 16px;
`

const LogoContainer = styled.div`
  flex: 1;
  justify-self: center;
  height: 320px;

  & svg {
    max-height: 320px;
  }

  @media (max-width: 900px) {
    height: 200px;

    & svg {
      max-height: 200px;
    }
  }
`

const TileBox = styled.div`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Tile = styled.div<{ baseColor: string; textColor?: string }>`
   width: 320px;
   height: 320px;
   padding: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   color: ${p => p.textColor || DARK_GRAY};
   background-color: ${p => p.baseColor};
   font-size: 32px;
   font-weight: 600;
   border-radius: 16px;
   transition: all 500ms ease-out;
   cursor: pointer;
   border: 4px solid transparent;

   &:hover {
    color: ${p => p.baseColor};
    background-color:  ${p => p.textColor || DARK_GRAY};
    border-color: ${p => p.baseColor};
   }

   @media (max-width: 900px) {
     width: 100%;
     height: auto;
     padding: 12px;
     font-size: 20px;
     margin-bottom: 12px;
     border-radius: 8px;

     &:last-child {
       margin-bottom: 0;
     }
   }
`

const TileSocialBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const SocialName = styled.span<{ hoverColor: string }>`
  display: none;

  color: white;
  transition: all 250ms ease-out;

  @media (max-width: 900px) {
    display: block;
    font-size: 24px;
    font-weight: 500;
  }
`

const TileSocial = styled.a<{ hoverColor: string }>`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  color: white;
  background-color: ${p => p.hoverColor};
  transition: all 250ms ease-out;
  border: 4px solid transparent;
  padding: 32px;

  &:hover {
    color: ${p => p.hoverColor};
    background-color: white;
    border-color: ${p => p.hoverColor};

    ${SocialName} {
      color: ${p => p.hoverColor};
    }
  }

  @media (max-width: 900px) {
    border-radius: 8px;
    padding: 12px;
    width: 100%;
    margin-bottom: 12px;
    border-radius: 8px;
    text-transform: uppercase;

    ${SocialName} {
      flex-basis: 75%;
      text-align: center;
    }

    > * + * {
      flex-basis: 25%;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const FloatingLink = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 48px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    padding: 0 24px;
  }
`

const FloatingAStyle = styled.a`
  display: block;
  font-size: 48px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  width: 100%;

  @media (max-width: 900px) {
    font-size: 24px;
  }
`

const P = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  text-align: justify;
  text-align-last: center;
  color: ${DARK_GRAY};

  @media (max-width: 900px) {
    font-size: 16px;
  }
`

const Index = () => {
  const translations = useTranslations()
  const { user } = useProvideAuth()
  const { index, footer, navigation } = translations
  const small = useMatchMedia('(max-width: 900px)')

  return (
    <Layout>
      <Main>
        <Section>
          <Carousel>
            <img src="/static/images/extras/extra-0.jpg" />
            <img src="/static/images/extras/extra-5.png" />
            <img src="/static/images/extras/extra-3.png" />
            <img src="/static/images/extras/extra-7.png" />
            <img src="/static/images/extras/extra-2.png" />
            <img src="/static/images/extras/extra-1.png" />
          </Carousel>
        </Section>
        <Title>
          <LogoContainer>
            <Logo color={ORANGE} />
          </LogoContainer>
        </Title>
        <Section>
          <Title>
            <ImgTitle src="/static/images/index-drink.png" />
            {capitalize(index.discover.title)}
          </Title>
          <TileBox>
            <Link href={`${navigation.cocktail.route}smoothies`}>
              <Tile baseColor={ORANGE} textColor="white">
                {capitalize(index.discover.first.title)}
              </Tile>
            </Link>
            <Link href={`${navigation.cocktail.route}greens`}>
              <Tile baseColor={GREEN} textColor="white">
                {capitalize(index.discover.third.title)}
              </Tile>
            </Link>
            <Link href={`${navigation.cocktail.route}signature`}>
              <Tile baseColor={GOLD} textColor="white">
                {capitalize(index.discover.second.title)}
              </Tile>
            </Link>
          </TileBox>
        </Section>
        {/* <Section>
          <Title>
            <ImgTitle src="/static/images/index-blender.png" />
            {capitalize(index.blog.title)}
          </Title>
          <div style={{ position: 'relative' }}>
            <Link href={navigation.blog.route}>
              <FloatingAStyle>
                <RoundImg src={index.blog.picture} />
                <FloatingLink>
                  {capitalize(index.blog.subtitle)}
                </FloatingLink>
              </FloatingAStyle>
            </Link>
          </div>
        </Section> */}
        <Section>
          <Title>
            <ImgTitle src="/static/images/index-fruit.png" />
            {capitalize(index.follow)}
          </Title>
          <TileSocialBox>
            <TileSocial hoverColor={FACEBOOK} target="_blank" href="https://www.facebook.com/smoothiestamarindo">
              <SocialName hoverColor={FACEBOOK}>FACEBOOK</SocialName>
              <Facebook size={small ? 28 : 56} />
            </TileSocial>
            <TileSocial hoverColor={INSTAGRAM} target="_blank" href="https://www.instagram.com/smoothiestamarindo">
              <SocialName hoverColor={INSTAGRAM}>INSTAGRAM</SocialName>
              <Instagram size={small ? 28 : 56} />
            </TileSocial>
            <TileSocial hoverColor={TWITTER} target="_blank" href="https://twitter.com/TamaSmoothies">
              <SocialName hoverColor={TWITTER}>TWITTER</SocialName>
              <Twitter size={small ? 28 : 56} />
            </TileSocial>
            <TileSocial hoverColor={YOUTUBE} target="_blank" href="https://www.youtube.com/channel/UCM3kOD5OFLBlFhhfee3WPiA">
              <SocialName hoverColor={YOUTUBE}>YOUTUBE</SocialName>
              <Youtube size={small ? 28 : 56} />
            </TileSocial>
          </TileSocialBox>
        </Section>
        <Section>
          <Title>
            {capitalize(index.testimonyTitle)}
          </Title>
          <Section>
            <RoundImg src="/static/images/index-end.png" alt="mitou et charles" />
          </Section>
          <P>{index.testimony}</P>
        </Section>
      </Main>
      <div>
        <Sign />
      </div>
    </Layout>
  )
}

export default Index
