import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useTranslations } from "../hooks/use-lang";
import { DARK_GRAY, ORANGE } from "../styles/colors";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 0;

  @media (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Span = styled.span<{ active: boolean }>`
  font-size: 16px;
  line-height: 2em;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-radius: 16px;
  padding: 4px 16px;
  color: ${(p) => (p.active ? "#fff" : DARK_GRAY)};
  ${(p) =>
    p.active
      ? `
    background-color: ${ORANGE};
  `
      : ""}
  transition: all 250ms ease-out;

  &:hover {
    background-color: ${ORANGE};
    color: white;
  }

  @media (max-width: 900px) {
    ${(p) =>
      p.active
        ? `

  `
        : ""}
    margi-bottom: 24px;
  }
`;

const Spacer = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${DARK_GRAY};
  padding: 0 12px;

  @media (max-width: 900px) {
    display: none;
  }
`;

type ActionProps = {
  current: string;
  items: Array<string>;
};

export const BreadcrumbsAction = ({ current, items }: ActionProps) => {
  const translations = useTranslations();
  const { navigation } = translations;
  return (
    <Container>
      {items.map((name, i, arr) => {
        const cleanName = name.split(" ").join("-");
        return (
          <Link href={`${navigation.cocktail.route}${cleanName}`} key={name}>
            <a style={{ textDecoration: "none" }}>
              <Span active={name === current}>{name}</Span>
              {i !== arr.length - 1 ? <Spacer>|</Spacer> : null}
            </a>
          </Link>
        );
      })}
    </Container>
  );
};

export default BreadcrumbsAction;
