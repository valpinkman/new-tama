import React, { useMemo, useState } from "react"
import styled from "styled-components"
import Layout from "../src/components/layout"
import Main from "../src/components/main"
import Img from "../src/components/img"
import { DARK_GRAY, GREEN } from "../src/styles/colors"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
  margin-top: 16px;
`

const Span = styled.a<{ active: boolean }>`
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  padding: 12px;
  color: white;
  cursor: pointer;
  background-color: ${(p) => (p.active ? GREEN : DARK_GRAY)};
  transition: all 250ms ease-out;
  border-radius: 4px;
  margin-bottom: 8px;

  &:hover {
    background-color: ${GREEN};
  }
`

const Spacer = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${DARK_GRAY};
  padding: 0 8px;
`

type Tabs = "lightsmoothie" | "mutivitamins" | "yummy" | "detox"
const Menu = () => {
  const tabs = useMemo(
    () => ["lightsmoothie", "mutivitamins", "yummy", "detox"],
    [],
  )
  const [active, setActive] = useState<Tabs>("lightsmoothie")

  const elements = useMemo(
    () => ({
      lightsmoothie: {
        element: (
          <Img
            src="/static/images/menu/2021/menu-tamarindo-1.jpg"
            alt="menu tamarindo 2021 - light smoothie"
          />
        ),
        title: "Light Smoothie",
      },
      mutivitamins: {
        element: (
          <Img
            src="/static/images/menu/2021/menu-tamarindo-2.jpg"
            alt="menu tamarindo 2021 - multivitamins"
          />
        ),
        title: "Multivitamins",
      },

      yummy: {
        element: (
          <Img
            src="/static/images/menu/2021/menu-tamarindo-3.jpg"
            alt="menu tamarindo 2021 - yummy"
          />
        ),
        title: "Yummy",
      },
      detox: {
        element: (
          <Img
            src="/static/images/menu/2021/menu-tamarindo-4.jpg"
            alt="menu tamarindo 2021 - detox"
          />
        ),
        title: "Detox",
      },
    }),
    [],
  )

  return (
    <Layout>
      <Main>
        <Container>
          {tabs.map((tab, i, arr) => (
            <React.Fragment key={tab}>
              <Span
                active={tab === active}
                onClick={() => setActive(tab as Tabs)}
              >
                {elements[tab as Tabs].title}
              </Span>
              {i !== arr.length - 1 ? <Spacer /> : null}
            </React.Fragment>
          ))}
        </Container>
        {elements[active] ? elements[active].element : null}
      </Main>
    </Layout>
  )
}

export default Menu
