import React, { useState, useCallback } from "react";
import { useSpring } from "react-spring";
import styled from "styled-components";
import Link from "next/link";
import { ORANGE, GREEN } from "../../styles/colors";
import Logo from "../../icons/logo";
import Nav from "./nav";
import LanguageSwitcher from "./lang-switcher";
import useMatchMedia from "../../hooks/use-match-media";

const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
  background-color: white;
  z-index: 1000;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const NavWrapper = styled.div`
  margin-left: auto;
`;

const LogoContainer = styled.div`
  width: 96px;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 64px;
  }
`;

function HeaderDesktop() {
  return (
    <Container>
      <Link href="/">
        <LogoContainer>
          <Logo color={ORANGE} hoverColor={GREEN} />
        </LogoContainer>
      </Link>
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <LanguageSwitcher />
    </Container>
  );
}

const SideBar = () => {
  return <Nav />;
};

function HeaderMobile() {
  // const [open, setOpen] = useState(false)

  // const openMenu = useCallback(() => setOpen(true), [setOpen])
  // const closeMenu = useCallback(() => setOpen(false), [setOpen])

  return (
    <>
      <Container>
        <LogoContainer>
          <Logo color={ORANGE} hoverColor={GREEN} />
        </LogoContainer>
      </Container>
      <SideBar />
    </>
  );
}

function Header() {
  const small = useMatchMedia("(max-width: 900px)");
  return small === null ? null : small ? <HeaderMobile /> : <HeaderDesktop />;
}

export default Header;
