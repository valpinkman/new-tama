import React from "react";
import styled from "styled-components";
import * as Shapes from "./shapes";

const Svg = styled.svg<{ size: number; color: string; hoverColor: string }>`
  height: ${(p) => p.size}px;
  width: ${(p) => p.size}px;

  rect,
  path,
  circle,
  polygon {
    fill: ${(p) => p.color};
    transition: fill 250ms ease-out;
  }

  circle {
    stroke-width: 1;
  }

  *:hover {
    fill: ${(p) => p.hoverColor};
  }
`;

type Props = {
  shape: Shapes.ShapeTypes;
  size: number;
  color: string;
  hoverColor: string;
};

const Icon = ({
  size = 32,
  color = "black",
  hoverColor = "black",
  shape,
}: Props) => {
  const Shape = Shapes[shape];
  return (
    <Svg viewBox="0 0 20 20" size={size} color={color} hoverColor={hoverColor}>
      <Shape />
    </Svg>
  );
};

export default Icon;
