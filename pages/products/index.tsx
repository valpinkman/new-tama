import React, { useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../../src/components/layout'
import Main from '../../src/components/main'
import Title from '../../src/components/title'
import { useTranslations } from '../../src/hooks/use-lang'
import Section from '../../src/components/section'
import { DARK_GRAY, GREEN, GOLD, ORANGE } from '../../src/styles/colors'
import { RoundImg } from '../../src/components/img'
import { capitalize } from 'lodash'

const ImgTitle = styled.img`
  max-width: 48px;
  padding-right: 16px;
`

const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: ${DARK_GRAY};
  text-align: center;

  @media (max-width: 900px) {
    text-align: justify;
    font-size: 20px;
  }
`

const TileBox = styled.div`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 64px;
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

const Products = () => {
  const translations = useTranslations()
  const { products, navigation, index } = translations

  return (
    <Layout>
      <Main>
        <Title style={{ justifyContent: 'center' }}>{products.title}</Title>
        <Section>
          <Subtitle>{products.description}</Subtitle>

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
      </Main>
    </Layout>
  )
}

export default Products
