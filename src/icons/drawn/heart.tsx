import React from "react";
import styled from "styled-components";

type Props = {
  size: number;
  color?: string;
};

const Svg = styled.svg<Props>`
  height: ${(p) => p.size}px;
  width: ${(p) => p.size}px;

  path {
    fill: ${(p) => p.color};
    transition: fill 250ms ease-out;
  }
`;

const Heart = ({ size = 32, color = "currentColor" }: Props) => {
  return (
    <Svg viewBox="0 0 477.65 410.56" color={color} size={size}>
      <path d="M364.76 36.46a118.89 118.89 0 0 0-14.8-.94c-43 0-76.16 23-98.32 45.32C230.33 37.46 197 9.46 156.93 1.81A101.93 101.93 0 0 0 137.77 0C89.54 0 37.3 34.57 13.56 82.21-10.39 130.28-2.59 182.74 36.78 238.1c39.63 55.75 89.08 104.25 136.91 151.16l9.86 9.67a21.24 21.24 0 0 0 18.57 11.62 20.83 20.83 0 0 0 9.38-2.28l17.29-8.59c60-29.79 122.06-60.59 177-101.33 54.57-40.45 78.25-87.9 70.36-141-7.92-53.52-51.76-113.37-111.39-120.89zm72.49 150.62c-1.95 45.45-52.95 78-86.69 99.63-46 29.4-95.42 54.22-143.42 78.13-38.94-38.27-79-77.86-114.2-120.7-25.4-31-63.8-77.75-51.58-121.57 11-39.58 51.86-81.94 95-81.94a64.76 64.76 0 0 1 8.29.54c49.92 6.51 71.66 56.13 79.09 78.94a18.05 18.05 0 0 0 4.26 12.85 22.24 22.24 0 0 0 17 8 20.38 20.38 0 0 0 17-9c11.5-16.69 43.08-55.51 88-55.51a77.22 77.22 0 0 1 14.26 1.34c44.08 8.17 74.9 64.48 72.98 109.31z" />
    </Svg>
  );
};

export default Heart;
