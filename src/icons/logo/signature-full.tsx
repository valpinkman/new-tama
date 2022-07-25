import React from "react";
import styled from "styled-components";

type Props = {
  color: string;
  hoverColor: string | null;
};

type TextProps = {
  alternative?: boolean;
  color: string;
};

const Text = styled.text<TextProps>`
  font-size: ${(p) => (p.alternative ? 54 : 45)}px;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  fill: ${(p) => p.color};
`;

const Svg = styled.svg<Props>`
  path {
    fill: ${(p) => p.color};
    transition: fill 250ms ease-out;
  }

  &:hover path {
    fill: ${(p) => p.hoverColor || p.color};
  }

  &:hover ${Text} {
    fill: ${(p) => p.hoverColor || p.color};
  }
`;

const SignatureFull = ({ color = "black", hoverColor = null }: Props) => (
  <Svg viewBox="0 0 679.28 563.08" color={color} hoverColor={hoverColor}>
    <Text color={color} transform="rotate(-60.28 248.644 -38.349)">
      T
    </Text>
    <Text color={color} transform="rotate(-49.48 268.21 -107.79)">
      A
    </Text>
    <Text color={color} transform="matrix(.82 -.58 .58 .82 206.63 130.5)">
      M
    </Text>
    <Text color={color} transform="rotate(-21.06 394.034 -629.451)">
      A
    </Text>
    <Text color={color} transform="rotate(-8.36 718.762 -1988.774)">
      R
    </Text>
    <Text color={color} transform="rotate(1.2 -3562.096 16374.002)">
      I
    </Text>
    <Text color={color} transform="rotate(11.33 -210.98 1882.227)">
      N
    </Text>
    <Text color={color} transform="rotate(24.69 4.523 988.193)">
      D
    </Text>
    <Text color={color} transform="rotate(37.8 70.923 722.158)">
      O
    </Text>
    <Text alternative color={color} transform="rotate(36.11 -618.862 532.974)">
      S
    </Text>
    <Text
      alternative
      color={color}
      transform="matrix(.89 .45 -.45 .89 233.27 492.43)"
    >
      I
    </Text>
    <Text alternative color={color} transform="rotate(16.86 -1576.418 1135.66)">
      G
    </Text>
    <Text alternative color={color} transform="rotate(3.98 -7315.33 4746.008)">
      N
    </Text>
    <Text
      alternative
      color={color}
      transform="rotate(-8.88 3536.153 -2093.246)"
    >
      A
    </Text>
    <Text alternative color={color} transform="rotate(-20 1667.312 -920.768)">
      T
    </Text>
    <Text
      alternative
      color={color}
      transform="matrix(.85 -.52 .52 .85 454.95 495.1)"
    >
      U
    </Text>
    <Text alternative color={color} transform="rotate(-44.08 824.697 -382.7)">
      R
    </Text>
    <Text alternative color={color} transform="rotate(-56 669.747 -287.592)">
      E
    </Text>
    <path
      d="M298.42 391.53s32.33-49.17 4.67-50.67c-29.79-1.62-94.91 69.23-101.33 149.5-1 12.5 4 30.25 23 22.25 0 0-4.56 5.2-17.31 1.45 11.75 8.68 29.06-2.45 43.31-17a8.09 8.09 0 0 0 3.13.38 6.13 6.13 0 0 0 4.14-2.12l-.89 3.38a5.61 5.61 0 0 0 2.5-.75 2.76 2.76 0 0 0 .88-1 2.94 2.94 0 0 1 0 1.75 3.57 3.57 0 0 0-.44 1.88 1.54 1.54 0 0 1 0 1.19 6.76 6.76 0 0 1-.81 1.5s-22 34.07-53.48 30.07c-16.56-2.1-30.42-16-24.5-65 7.33-60.67 69-147.5 124.14-141.17 25.17 2.89 25.33 34 1.67 65 5.5-8.83 6.25-11.33 6.25-11.33s-7.75 10.5-11.92 14.42c0 0 4.58-6 6.08-8.33-4.08 5.17-6.42 5.92-9 8.58a18.12 18.12 0 0 1-3.42 3.08s6.33-9.17 7.5-11.17a26.29 26.29 0 0 1-4.17 4.11z"
      transform="translate(-179.89 -97.34)"
    />
    <path
      d="M350.28 437.37s-11.25 13-35.25 16-20.74-36 6.25-31.75c25.25 4-31.75 81.5-47.5 69.25-5.33-4.15 3.75-37.69 19.75-52.5s-1-17-1-17c-26.25 25-53.5 75.75-16.75 84.75s88.5-90 52.75-96.75c-36.63-6.92-52 34.25-36 48.25s44.25 6 44.25 6a73.49 73.49 0 0 1-28.75-.25s19.5 3.5 36.5-6.75 5.75-19.25 5.75-19.25z"
      transform="translate(-179.89 -97.34)"
    />
    <path
      d="M389.61 427.7s3.5-2.17 6.67-9.17 3.67-15.67 1.83-15.67c-8.5 0-38.33 28.19-38.33 54.78 0 11.72 2.67 16.39 2.67 16.39a15 15 0 0 1-2.67-6.33c.67 12.5 11.75 16.92 35.75-4.33s30.75-28.75 30.75-28.75l-6.5 23s-14.5 19.22-25.25 24.22c0 0 5.75-2 18.5-13.25-20.25 20.5-32.5 26-49 26s-30.1-32.86-4.25-71.75c24.76-37.25 53.25-38.75 50.5-18s-16.5 28.38-16.5 28.38a5.76 5.76 0 0 0 .44-1.37 3.76 3.76 0 0 1 1.13-2.75 9.88 9.88 0 0 0 1.56-2.44s-4 4.06-5.69 4.94a3.91 3.91 0 0 1 .19-1.75 1.22 1.22 0 0 0-.44-1.44 10.57 10.57 0 0 0-1.36-.71z"
      transform="translate(-179.89 -97.34)"
    />
    <path
      d="M530.84 437.74s-1.5 2.31-3.12 4.75a19.51 19.51 0 0 0-2.12 3.88 7 7 0 0 1 .94-3.37c1.06-2.19 5.58-9.46 5.25-9s-7.17 9-7.17 9l7.17-13.36c-22 30-23.33 31-67.33 13.36 16.67-10 43.33-11.28 43.33-25.36 0-7-7.33-17-32.67-9.11 29.67-19.78 87-137.89 27.67-132.89s-81.67 169.33-84 186.5a4.39 4.39 0 0 0 .75 2.83 14.26 14.26 0 0 1 .25 3.33c0 .83-.08 2 .5 2.33a2.44 2.44 0 0 1 1 1.83c.25 1 1.92 1.42 1.92 1.08a15.7 15.7 0 0 1 .42-1.83s.83 2.25 1.83 2.33 1.5-2.83 3.58-7.75c-.08 2.08-.08 4.39-.08 4.39 8.67-39.45 40.17-52.22 56.5-54.05s9.83 4.83-.67 10-30.5 11.83-33.5 12.67-.67 1.67-3.33 3.69 6.67 18.81 35.67 26 38-9.83 43.33-18.5 3.65-7.35 3.27-8-1.56.31-1.19-.5 1.8-4.25 1.8-4.25zM521 327.91s-5.11 6.46-.11-3.55 6-25 6-25c1.96 11.76-5.89 28.55-5.89 28.55zm2.15-42.91s-4.92-5.56-8.95-6.93c0-.07 4.66-1.24 8.95 6.93zm-81.7 134.41s19.33-134 66-134c39.99-.04-31.01 116.29-66.01 133.96zM337.78 378.7s21.33-8.67 32-13.67 56.5-18.67 56.5-18.67l-6.17 4c0 4.33 3.33 4.33 2 5.33s-5.67 6.83-5.67 6.83-7.67 2.83-9.67 3.83c-.56.28-4 1.7-8.8 3.67-12.25 5-33.46 13.51-39.2 15.67 0 0 23.5-8 38.67-13.67-21.67 9.83-39 16.5-43.52 17.5s-5.83 1.5-8.58.67a17 17 0 0 1-5.91-2.83c-1.5-1.17-3.33-2.33-2.33-2.5a4.24 4.24 0 0 0 2-1.67s-2.9-1.83-2.29-2.33.29 1.17.62-.5z"
      transform="translate(-179.89 -97.34)"
    />
    <path
      d="M472.44 340.37s37-16.33 88.67-28.33 134.33-22 157.33-22.67l2.77 2-2.29 1.83-1.37 2.06c-2.06 1.6-.68 1.42-2.06 1.6C628.56 308.3 596.83 317 596.83 317s77.26-13.27 80.46-13.27c-113.25 22.19-166 38.64-192.87 42.64 27.16-5.61 56.05-14.27 56.05-14.27l-62 14.27a10.14 10.14 0 0 0-3.21-1.23c-2.06-.46-4-1.37-2.82-2.06a22.15 22.15 0 0 0 2.82-2.06z"
      transform="translate(-179.89 -97.34)"
    />
    <path
      d="M608.78 395c-1.33-2.33-9 2.33-9 2.33-26.67 37-46.33 50.33-44.67 17.33s30.33-125 32.33-133.24 1.83-10.59 1.83-10.59l-2.25-.75c-2.25-.75-2.25.75-3.75 1.25s-5.25 1.25-5.75 2.75c0 0-9.42 25.25-28.08 85.65s-11.92 90.35 5.57 89.85 31.77-19.25 41.63-31.58 12.14-13.67 12.14-13.67 1.33-6.96 0-9.33zm-64.86 46.89s2.13 2.82 3.67 3.06 1.58.51 1.58.51c2.77 2.88 7.76 3.24 7.76 3.24a13.27 13.27 0 0 1-13.02-6.78z"
      transform="translate(-179.89 -97.34)"
    />
    <path
      d="M542 444.37s6.32 11.54 21.38 5.88c6-2.26 19.88-14.25 19.88-14.25s-11.12 11.81-20.62 15.63-16.99-.14-20.64-7.26zM647.61 356.54c7.33-15.83 8.17-20.17 5.83-22.17s-4-4-5.83-4.5-3.17-1.67-4.83-.67-7 3.83-8.33 5.17a122 122 0 0 0-34.33 64.5c-7.17 39.67 8 39.83 8 39.83-2.82-1-6.33-2.5-7.67-11.67 3.5 13.67 12 12.08 22.17 9a17.63 17.63 0 0 1-7.33 3.54c10.67-1.5 23-13.33 30.33-29.17 0 0-1.83 20 17.33 20.83s31.67-32.33 31.67-32.33c-3.17 20.83 0 29.33 11.33 29.33S731.28 406 731.28 406c-3 21.5 2.83 31 12 32.67-5.34-2.17-7.25-5.08-7.25-5.08s3.17 5 12.08 3.25l-1.67 1.16s1 1.19 8-4c29.5-21.75 62.33-77.58 62.33-77.58-6.67 43 9.51 80.81 3.88 95.89s-17.81 17.58-23.26 16.69-19.27-8.54 6.72-31.26a225.48 225.48 0 0 1 54-34.53s-1.09-1.82.55-2.54-1.09-1.45-1.09-1.45a3.2 3.2 0 0 1 .73-2l.73-.73s-63.79 23.26-80.52 59.07c9.09-20.36 32-35.26 32-35.26-16.9 10.36-34.17 28.35-33.62 42.53s18.18 24.72 36.9 16.72 30.9-21.26 25.45-60.52-9.81-67.79-.18-87.6 10.91-22 9.45-22.54-1.45-1.27-1.64-2.73-.73-4.54-.73-4.54l-2.73 2.18a2.72 2.72 0 0 0-3.09-.18c-2 .91-2.91-.36-2.91-.36l2-2.36s-4.18.73-5.63 4.36-8.54 18.54-8.54 18.54-65.29 98.43-77.92 96.61c-13.83-2 44.83-192.33 72.17-190.67 17.38 1.06-24.33 104.33-61 114a63.11 63.11 0 0 0 27.83-20.5c-15.83 20.5-29.17 22.17-29.17 22.17s-1.33 5.5-1.83 6.17a6.76 6.76 0 0 0-.67 3.17 5.17 5.17 0 0 0 .33 1.67c42.58 3.25 106.58-132 66.83-136.5s-78 131.25-80.5 139.5-24.75 53.88-33 55.25c4.88-1 10.38-7.62 19.38-24.25-10.5 22.13-16.75 25.25-21.5 25.5s1.46-38.67 8.46-55.83c0 0-2.33.33-2.33-1s-1-1.17-1.83-1.5a3.59 3.59 0 0 0-2.83-.33 6.16 6.16 0 0 0-2.83 1.5s-19 52-37 60.33c11.33-8 24.83-35 24.83-35-14.83 26.17-22.67 34-29.17 32.67s-.17-43.83 9.33-69.83c0 0-1.83.33-2.5-.5a12.59 12.59 0 0 1-1.33-3s-.67 1.33-1.67.83a15.86 15.86 0 0 1-2.5-1.83s-3.17.67-3.67 2.5A205.43 205.43 0 0 1 650.61 379c-7.67 19.17-22.83 44-35.17 44s15.06-76.75 28.17-78c3.5-.33-1.5 13-1.67 14.33s2.5 2.67 2.17 4.33-1 2.17-.33 1.67 3.83-8.79 3.83-8.79z"
      transform="translate(-179.89 -97.34)"
    />
    <path
      d="M714.78 335.7s7.67-25.17 13.17-33.17 7.83-6.83 10.5-6.33a2.61 2.61 0 0 1 2 3.83c-.5.83-12.67 24-14.5 28s-7 11.33-7 11.33a18 18 0 0 0-1.83-1.83c-.67-.5.33-2.33.33-2.33a5.78 5.78 0 0 1 .33-2.5c.5-1.67 1.5-7.17 1.5-7.17z"
      transform="translate(-179.89 -97.34)"
    />
  </Svg>
);

export default SignatureFull;
