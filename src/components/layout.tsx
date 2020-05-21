import React from 'react'
import dynamic from 'next/dynamic'

const HeaderNoSSR = dynamic(
  () => import('./header'),
  { ssr: false }
)

type Props = {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <HeaderNoSSR />
      {children}
    </>
  )
}

export default Layout