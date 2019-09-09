import * as React from 'react'

import { useChangeLang } from '../src/hooks/use-lang'
import Menu from '../src/components/navigation/menu'

const Index = () => {
  const { lang, changeLang } = useChangeLang()

  return (
    <Menu lang={lang}>
      <h1>Hello World</h1>
      <span>Lang: {lang}</span>
      <div>
        <h4>change lang</h4>
      </div>
      <button onClick={() => changeLang('fr')}>fr</button>
      <button onClick={() => changeLang('it')}>it</button>
      <button onClick={() => changeLang('en')}>en</button>
    </Menu>
  )
}

export default Index
