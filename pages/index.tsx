import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import Layout from '../src/components/layout'
import Sign from '../src/components/user/sign'
import Logo from '../src/icons/logo/round'
import { ORANGE, DARK_GRAY, GOLD, GREEN, PINK } from '../src/styles/colors'
import styled from 'styled-components'
import { useTranslations, useLang } from '../src/hooks/use-lang'
import { capitalize } from '../src/utils/string'
import Link from 'next/link'

const Img = styled.img`
  max-width: 100%;
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
  max-width: 32px;
  padding-right: 16px;
`

const Main = styled.main`
  width: 100%;
  max-width: 1280px;
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

   &:hover {
    color: ${p => p.baseColor};
    background-color:  ${p => p.textColor || DARK_GRAY};;
   }
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
            <ImgTitle  src="/static/images/index-drink.png" />
            {capitalize(index.discover.title)}
          </Title>
          <TileBox>
            <Tile baseColor={ORANGE} textColor="white">
              {capitalize(index.discover.first.title)}
            </Tile>
            <Link href={navigation.cocktail.route} as={`${navigation.products.route}/signature`}>
              <Tile baseColor={GOLD} textColor="white">
                {capitalize(index.discover.second.title)}
              </Tile>
            </Link>
            <Tile baseColor={GREEN} textColor="white">
              {capitalize(index.discover.third.title)}
            </Tile>
          </TileBox>
        </Section>
        <Section>
          <Title>
            <ImgTitle  src="/static/images/index-blender.png" />
            {capitalize(index.blog.title)}
          </Title>
        </Section>
        <Section>
          <Title>
            <ImgTitle  src="/static/images/index-fruit.png" />
            {capitalize(index.follow)}
          </Title>
        </Section>
        <Img src="/static/images/index-end.png" alt="mitou et charles" />
        <p>{index.testimony}</p>
      </Main>
      <div>
        <Sign />
      </div>
    </Layout>
  )
}

export default Index
