import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import Layout from '../src/components/layout'
import Sign from '../src/components/user/sign'
import Logo from '../src/icons/logo/round'
import { ORANGE, DARK_GRAY, GOLD, GREEN, PINK, FACEBOOK, TWITTER, INSTAGRAM, YOUTUBE } from '../src/styles/colors'
import styled from 'styled-components'
import { useTranslations, useLang } from '../src/hooks/use-lang'
import { capitalize } from '../src/utils/string'
import Link from 'next/link'
import Facebook from '../src/icons/drawn/facebook'
import Twitter from '../src/icons/drawn/twitter'
import Instagram from '../src/icons/drawn/instagram'
import Youtube from '../src/icons/drawn/youtube'

const Img = styled.img`
  max-width: 100%;
  width: 100%;
`

const RoundImg = styled(Img)`
  border-radius: 16px;
`

const Title = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 48px 0;
  font-size: 36px;
  font-weight: 700;
  color: ${DARK_GRAY};
`

const ImgTitle = styled.img`
  max-width: 40px;
  padding-right: 16px;
`

const Main = styled.main`
  width: 100%;
  max-width: 1280px;
  padding: 0 12px;
  margin: 32px auto;
  display: flex;
  flex-direction: column;
`

const LogoContainer = styled.div`
  flex: 1;
  justify-self: center;
  height: 320px;

  & svg {
    max-height: 320px;
  }
`

const Section = styled.section`
  margin-bottom: 32px;
  position: relative;
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
`

const TileSocialBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const TileSocial = styled.a<{ hoverColor: string }>`
  cursor: pointer;
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
  }
`

const FloatingLink = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 48px;
`

const FloatingAStyle = styled.a`
  display: block;
  font-size: 48px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  width: 100%;
`

const P = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
  color: ${DARK_GRAY};
`

const Index = () => {
  const lang = useLang()
  const translations = useTranslations(lang)
  const { index, footer, navigation } = translations

  return (
    <Layout>
      <Main>
        <Section>
          <Title>
            <LogoContainer>
              <Logo color={ORANGE} />
            </LogoContainer>
          </Title>
        </Section>
        <Section>
          <Carousel
            autoPlay
            swipeable
            emulateTouch
            stopOnHover={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={4000}
            transitionTime={1000}
            infiniteLoop
          >
            <img src="/static/images/extras/extra-0.jpg" />
            <img src="/static/images/extras/extra-5.png" />
            <img src="/static/images/extras/extra-3.png" />
            <img src="/static/images/extras/extra-7.png" />
            <img src="/static/images/extras/extra-2.png" />
            <img src="/static/images/extras/extra-1.png" />
          </Carousel>
        </Section>
        <Section>
          <Title>
            <ImgTitle src="/static/images/index-drink.png" />
            {capitalize(index.discover.title)}
          </Title>
          <TileBox>
            <Link href={navigation.cocktail.route} as={`${navigation.products.route}/smoothies`}>
              <Tile baseColor={ORANGE} textColor="white">
                {capitalize(index.discover.first.title)}
              </Tile>
            </Link>
            <Link href={navigation.cocktail.route} as={`${navigation.products.route}/greens`}>
              <Tile baseColor={GREEN} textColor="white">
                {capitalize(index.discover.third.title)}
              </Tile>
            </Link>
            <Link href={navigation.cocktail.route} as={`${navigation.products.route}/signature`}>
              <Tile baseColor={GOLD} textColor="white">
                {capitalize(index.discover.second.title)}
              </Tile>
            </Link>
          </TileBox>
        </Section>
        <Section>
          <Title>
            <ImgTitle src="/static/images/index-blender.png" />
            {capitalize(index.blog.title)}
          </Title>
          <Section>
            <Link href={navigation.blog.route}>
              <FloatingAStyle>
                <RoundImg src={index.blog.picture} />
                <FloatingLink>
                  {capitalize(index.blog.subtitle)}
                </FloatingLink>
              </FloatingAStyle>
            </Link>
          </Section>
        </Section>
        <Section>
          <Title>
            <ImgTitle src="/static/images/index-fruit.png" />
            {capitalize(index.follow)}
          </Title>
          <TileSocialBox>            <TileSocial hoverColor={FACEBOOK} target="_blank" href="https://www.facebook.com/smoothiestamarindo">
            <Facebook size={56} />
          </TileSocial>
          <TileSocial hoverColor={INSTAGRAM} target="_blank" href="https://www.instagram.com/smoothiestamarindo">
            <Instagram size={56} />
          </TileSocial>
          <TileSocial hoverColor={TWITTER} target="_blank" href="https://twitter.com/TamaSmoothies">
            <Twitter size={56} />
          </TileSocial>
          <TileSocial hoverColor={YOUTUBE} target="_blank" href="https://www.youtube.com/channel/UCM3kOD5OFLBlFhhfee3WPiA">
            <Youtube size={56} />
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
