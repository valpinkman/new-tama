import React, { useEffect } from 'react'
import styled from 'styled-components'
import Youtube from 'react-youtube'
import Layout from '../src/components/layout'
import Sign from '../src/components/user/sign'
import { useTranslations, useLang } from '../src/hooks/use-lang'
import { DARK_GRAY, GREEN } from '../src/styles/colors'
import Main from '../src/components/main'
import Title from '../src/components/title'
import Section from '../src/components/section'
import { RoundImg } from '../src/components/img'
import Img from '../src/components/img'

const Subtitle = styled.h3`
  font-size: 24px;
  color: ${DARK_GRAY};
  text-align: center;
`

const HowToWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`

const HowToItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Logo = styled(Img)`
  max-width: 72px;
  padding: 16px 16px 16px 0;
`

const P = styled.p`
  color: ${GREEN};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`


const About = (props: any) => {
  const lang = useLang()
  const translations = useTranslations(lang)
  const { about, footer, navigation } = translations

  useEffect(() => {
    console.log({ props, about })
  })

  return (
    <Layout>
      <Main>
        <Title style={{ justifyContent: 'center' }}>{about.title}</Title>
        <Section>
          <RoundImg src={about.img} />
        </Section>
        <Section>
          <Subtitle>
            {about.subtitle}
          </Subtitle>
          <HowToWrapper>
            {about.steps.map(({ name, title, img }: { name: string; title: string; img: string }) => (
              <HowToItem>
                <Logo src={img} alt={name} />
                <P>{title}</P>
              </HowToItem>
            ))}
          </HowToWrapper>
        </Section>
        <Section>
          <Title style={{ justifyContent: 'center' }}>{about.videos.smoothie.heading}</Title>
          <Center>
            <Youtube videoId={about.videos.smoothie.video} />
          </Center>
        </Section>
        <Section>
          <Title style={{ justifyContent: 'center' }}>{about.videos.cocktail.heading}</Title>
          <Center>
            <Youtube videoId={about.videos.cocktail.video} />
          </Center>
        </Section>
      </Main>
      <div>
        <Sign />
      </div>
    </Layout>
  )
}

About.getInitialProps = async () => {
  await new Promise(res => {
    setTimeout(() => res(), 5000)
  })
  return {
    page: 'about',
  }
}

export default About
