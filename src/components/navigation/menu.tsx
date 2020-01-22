import React from 'react'
import Navigation from '../nav'

type Props = {
  children: React.ReactNode;
}

const Menu = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  )
}

export default Menu
