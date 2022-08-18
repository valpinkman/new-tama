import styled from "styled-components";
import { DARK_GRAY } from "../styles/colors";

const Title = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 48px 0;
  font-size: 36px;
  font-weight: 700;
  color: ${(p) => p.color || DARK_GRAY};

  @media (max-width: 900px) {
    margin: 24px 0;
    font-size: 24px;
  }
`;

export default Title;
