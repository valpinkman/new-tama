import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { DARK_GRAY, GREEN, ORANGE } from '../styles/colors'
import { capitalize } from 'lodash'

interface Props {
  current: string;
  items: Array<{
    name: string;
    path: string;
  }>;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const A = styled.a<{ active: boolean }>`
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  padding: 12px;
  color: white;
  cursor: pointer;
  background-color: ${p => p.active ? GREEN : DARK_GRAY};
  transition: all 250ms ease-out;
  border-radius: 4px;

  &:hover {
    background-color: ${GREEN};
  }
`

const Spacer = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${DARK_GRAY};
  padding: 0 12px;
`

const BreadcrumbsLink = ({ current, items }: Props) => {
  return (
    <Container>
      {items.map(({ name, path }, i, arr) => (
        <React.Fragment key={name}>
          <Link href={path}>
            <A active={name === current}>{capitalize(name)}</A>
          </Link>
          {i !== arr.length - 1 ? <Spacer /> : null }
        </React.Fragment>
      ))}
    </Container>
  )
}

export default BreadcrumbsLink