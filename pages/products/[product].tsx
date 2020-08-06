import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { useRouter, NextRouter } from 'next/router'
import sample from 'lodash/sample'
import Layout from '../../src/components/layout'
import Main from '../../src/components/main'
import Title from '../../src/components/title'
import { useTranslations } from '../../src/hooks/use-lang'
import Section from '../../src/components/section'
import dynamic from 'next/dynamic'
import { capitalize } from '../../src/utils/string'
import { DARK_GRAY, PINK, LIGHT_GREEN, LIGHT_ORANGE, LIGHT_PINK } from './../../src/styles/colors'

const BreadcrumbsLink = dynamic(
  ()=> import('../../src/components/breadcrumbs'),
  { ssr: false }
)

const BreadcrumbsAction = dynamic(
  ()=> import('../../src/components/breadcrumbs-action'),
  { ssr: false }
)

const TaglineWrapper = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
`

const Span = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${DARK_GRAY};

  &:last-child {
    margin-bottom: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const Container = styled.div<{ type: 'smoothies' | 'greens' | 'signature' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 50%;
  background-color: ${p =>
    p.type === 'smoothies' ?
      LIGHT_ORANGE :
      p.type  === 'greens' ?
        LIGHT_GREEN :
        LIGHT_PINK
};
  width: 1px;
  height: 1px;
  padding: 210px;

  @media (max-width: 900px) {
    padding: 146px;
    margin: 16px;
  }
`

const Img = styled.img`
  width: auto;
  max-height: 240px;

  @media (max-width: 900px) {
    max-height: 200px;
  }
`

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
  color: ${DARK_GRAY};
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 64px;
  flex: 1;

  @media (max-width: 900px) {
    margin-left: 0;
  }
`

const Fruits = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: space-evenly;
  }
`

const Fruit = styled.div<{ type: 'smoothies' | 'greens' | 'signature' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background-color: ${p =>
    p.type === 'smoothies' ?
      LIGHT_ORANGE :
      p.type  === 'greens' ?
        LIGHT_GREEN :
        LIGHT_PINK
};
  margin-right: 24px;
  margin-bottom: 24px;

  img {
    width: 60px;
  }
`

const FruitsName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${DARK_GRAY};
  margin-bottom: 32px;
`

const Syrup = styled.span`
  font-size: 16px;
  color: white;
  padding: 4px 8px;
  background-color: ${DARK_GRAY};
  color: white;
  font-weight: 600;
  text-transform: capitalize;
  align-self: start;
  margin-bottom: 8px;
`

const HideSmall = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`

const HideBig = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
`

const Product = () => {
  const router = useRouter()
  const translations = useTranslations()
  const { cocktails, products: productsLang } = translations

  const [name] = router.asPath.split('/').slice(-1)
  const currCocktail = cocktails[name]
  const products = currCocktail.products.map((p: { name: string }) => p.name)

  const [active, setActive] = useState(() =>products[0])

  const items = Object.keys(cocktails).map((key: string) => ({ name: key, path: cocktails[key].path  }))
  const activeProduct = currCocktail.products.find((p: any) => p.name === active)

  return (
    <Layout>
      <Main>
        <BreadcrumbsLink current={name} items={items} />
        <Title>{currCocktail.title}</Title>
        <TaglineWrapper>
          {currCocktail.tagline.map((t: string) => <Span key={t}>{t}</Span>)}
        </TaglineWrapper>
        <BreadcrumbsAction current={active} items={products} action={setActive} />
        <Section>
          <Wrapper>
            <HideBig>
              <Title style={{ marginBottom: 24 }}>{capitalize(activeProduct.name)}</Title>
            </HideBig>
            <Container type={name as 'smoothies' | 'greens' | 'signature' }>
              <Img src={activeProduct.picture} />
            </Container>
            <Meta>
              <HideSmall>
                <Title style={{ marginBottom: 24 }}>{capitalize(activeProduct.name)}</Title>
              </HideSmall>
              <SubTitle>{productsLang.content}</SubTitle>
              <FruitsName>{activeProduct.fruits.map((fruit: { name: string; img: string }) => fruit.name).join(' / ')}</FruitsName>
              <Fruits>
                {activeProduct.fruits.map((fruit: { name: string; img: string }) => {
                  return (
                    <Fruit key={fruit.name} type={name as 'smoothies' | 'greens' | 'signature' }>
                      <img src={`/static/images/fruits/${fruit.img}.svg`} />
                    </Fruit>
                  )
                })}
              </Fruits>
              {activeProduct.syrup ? (
                <>
                  <Syrup>{`+ ${productsLang.syrup}`}</Syrup>
                  <SubTitle>{`${capitalize(activeProduct.syrup)}`}</SubTitle>
                  <Syrup>{`+ ${productsLang.alcohol}`}</Syrup>
                  <SubTitle>{`${capitalize(activeProduct.alcohol)}`}</SubTitle>
                  {/* <Alcohol></Alcohol> */}
                </>
              ) : null}
            </Meta>
          </Wrapper>
        </Section>
      </Main>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {}
  }
}

export default Product
