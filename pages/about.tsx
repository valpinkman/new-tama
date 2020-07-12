import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import Layout from '../src/components/layout'
import Sign from '../src/components/user/sign'
import { useTranslations, useLang } from '../src/hooks/use-lang'
import { DARK_GRAY, GREEN } from '../src/styles/colors'
import Main from '../src/components/main'
import Title from '../src/components/title'
import Section from '../src/components/section'
import { RoundImg } from '../src/components/img'
import Img from '../src/components/img'
import useMatchMedia from '../src/hooks/use-match-media'

const YoutubeVideo = dynamic(
  () => import('../src/components/youtube-video'),
  { ssr: false }
)

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

  @media (max-width: 900px) {
    font-size: 16px;
    font-weight: 600;
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`


const About = (props: any) => {
  const lang = useLang()
  const translations = useTranslations(lang)
  const { about } = translations
  const small = useMatchMedia('(max-width: 900px)')
  const [width, setWidth] = useState(() => {
    try {
      const wSize = window?.innerWidth
      return wSize || 0
    } catch (error) {
      return 0
    }
  })

  useEffect(() => {
    if (width === 0) {
      const wSize = window.innerWidth
      setWidth(wSize)
    }

    const handler = (e: any) => {
      console.log(e)
    }

    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, [])

  const opts = {
    width: `${width - 24}`,
    height: `${((width - 24) * 9) / 16}`,
  }

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
              <HowToItem key={name}>
                <Logo src={img} alt={name} />
                <P>{title}</P>
              </HowToItem>
            ))}
          </HowToWrapper>
        </Section>
        <Section>
          <Title style={{ justifyContent: 'center' }}>{about.videos.smoothie.heading}</Title>
          <Center>
            <YoutubeVideo videoId={about.videos.smoothie.video} opts={small ? opts : undefined} />
          </Center>
        </Section>
        <Section>
          <Title style={{ justifyContent: 'center' }}>{about.videos.cocktail.heading}</Title>
          <Center>
            <YoutubeVideo videoId={about.videos.cocktail.video} opts={small ? opts : undefined} />
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
