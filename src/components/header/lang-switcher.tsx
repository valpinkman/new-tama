import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useChangeLang } from '../../hooks/use-lang'
import { Lang } from '../../../types/lang'
import { DARK_GRAY } from '../../styles/colors'

const langs: Lang[] = ['fr', 'en', 'it']

const Wrapper = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 24px
`

const ExtraLangs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  top: 50%;
  opacity: 0;
  transition: all ease-out 250ms;
`

const Item = styled.div<{ onClick?: (l: Lang) => void; active?: boolean }>`
  color: ${DARK_GRAY};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px;
  text-decoration: ${p => p.active ? 'underline' : 'none'};
  text-align: right;
  background-color: white;
  margin-bottom: 1px;

  &:hover ${ExtraLangs} {
    top: 100%;
    opacity: 1;
  }
`

function LangButton({ changeLang, lang }: { changeLang: (lang: Lang) => void; lang: Lang }) {

  const onClick = useCallback(() => {
    if (changeLang) {
      changeLang(lang)
    }
  }, [lang, changeLang])

  return (
    <Item onClick={onClick}>{lang}</Item>
  )
}

function LanguageSwitcher() {
  const { lang, changeLang } = useChangeLang()

  return (
    <Wrapper>
      <Item active>
        ˯{lang}
        <ExtraLangs>
          {langs.filter(l => l !== lang).map(l => (
            <LangButton key={l} changeLang={changeLang} lang={l} />
          ))}
        </ExtraLangs>
      </Item>
    </Wrapper>
  )
}

export default LanguageSwitcher