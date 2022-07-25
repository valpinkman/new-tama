import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Footer from "./footer";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderNoSSR = dynamic(() => import("./header"), { ssr: false });

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Main>
      <HeaderNoSSR />
      {children}
      <Footer />
    </Main>
  );
}

export default Layout;
