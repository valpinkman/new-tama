import React from 'react'
import dynamic from 'next/dynamic'


const HeaderNoSSR = dynamic(
  () => import('./header'),
  { ssr: false }
)

type Props = {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <HeaderNoSSR />
      {children}
    </>
  )
}

export default Layout