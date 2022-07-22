import React from "react"
import styled from "styled-components"
import { DARK_GRAY, GREEN } from "../styles/colors"
import { useTranslations } from "../hooks/use-lang"

const Foot = styled.footer`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-top: 64px;
  padding: 0 12px;
  color: white;
  background-color: ${GREEN};

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: start;
    height: auto;
    padding: 16px;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 1.2;

  @media (max-width: 900px) {
    margin-top: 16px;
  }
`

const Footer = () => {
  const { footer } = useTranslations()
  return (
    <Foot>
      <span>{footer.title}</span>
      <Div>
        <span>{footer.contact.name}</span>
        {/* <span>{footer.contact.address}</span> */}
        <span>{footer.contact.zip}</span>
        <span>{footer.contact.city}</span>
      </Div>
      <Div>
        <span>{footer.contact.title}</span>
        <span>{footer.contact.email}</span>
        <span>{footer.contact.telephone}</span>
      </Div>
    </Foot>
  )
}

export default Footer
