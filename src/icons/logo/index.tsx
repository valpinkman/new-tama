import React from 'react'
import styled from 'styled-components'

type Props = {
  color: string;
  hoverColor: string | null;
}

const Svg = styled.svg<Props>`
  path {
    fill: ${p => p.color};
    transition: fill 250ms ease-out;
  }

  &:hover path {
    fill: ${p => p.hoverColor || p.color};
  }
`

const Logo = ({ color = 'black', hoverColor = null }: Props) => (
  <Svg viewBox="0 0 451.51 189.02" color={color} hoverColor={hoverColor}>
    <path d="M443.51 32.49c-.8-7.52-31.61-11.42-42.61 26s7.4 44.48 7.4 44.48a27.23 27.23 0 0 1-4.79-6.85s3.4 4.65 8.7 5.85c7 1.57 11.2-1.28 11.2-1.28-3.2 2.28-10.5 3.47-10.5 3.47 8.8-.32 27.81-7 36-35.89s-5.4-35.78-5.4-35.78zM411.9 73.87c0-21.29 17.81-30.1 17.81-30.1a25.37 25.37 0 0 0-8.07 8.29s5.4-4.86 9.87-5.62a6.64 6.64 0 0 0-2.53 1.7s10.4-5.5 10.4 8.41c-.04 26.68-27.51 46.2-27.51 17.32zM196.64 15.25l-.28-.11a14 14 0 0 0 3.54 13.67l6.72 6.78-1-8.86a14 14 0 0 0-8.98-11.48zm-92.22 75.87a11.08 11.08 0 0 0-2.33-3.66c-1.79-2-.12-2 2.09-3.49-2.56-.2-3.38-4.11-3.38-4.11-9.38-5-22.15 1.34-60.2 11.85s-40.5.24-40.5.24c-.35 5.19 4.15 8.48 4.15 8.48a7.4 7.4 0 0 1-4.23-5.46s-.71 7.36 10 9.95a3.28 3.28 0 0 1-4.73-.65s-2 7.53 23.56 5.36c1.75-.15 3.45-.35 5.14-.58-8.43 21.94-6.75 35.22-6.75 35.22a53.54 53.54 0 0 1 4.21-18s-2.37 20.31-.53 27.23 6.78 4.29 10.52 7 5.32 2.62 5.32 2.62-2.71-17.24-2.62-21.81l.88 3.81s-1-22 5-39.51C72.7 99.12 89 87.89 104.42 91.12zm163.24 11c-.22 10.77 2.2 14.56 2.2 14.56l1-1.31c1.31 3.25 5 4.3 5 4.3s.41-2.08 1.85-1.47 1.76-2.16 4-4.54-1.69-19-.12-29.8-.48-7.58-1-10.34-1.2-2.73-3.46-3.5-2.37-2.79-2.73-4-2.13 5.41-2.13 5.41v-4.65s-3.94 3.17-4.61 35.34zm66.78-14.68c0-17.57-2.81-23.28-4-29.36s-6.69-22.27-7.79-22.84-4.76-2.94-4.76-2.94-.37 1.8-1.22 1.73-1.82 2.87-1.82 2.87 7.69 27.54 7.41 43.59c-1.26-20-8.18-42.11-8.18-42.11s7.09 38.31 5.39 64.29c-12.32-17.46-15.51-27.42-17.95-30.06s-6.59-2.84-7.2-1.8-1 0-2 2.28c-1.74 8.46-4.39 17.86-1.74 37.2 0 0-.46-6.26-.46-8.91 0 0 .46 6.44 1.56 8.63s1 1.82 2.1 2.09a6.08 6.08 0 0 0 4.3-.94c1-.83.55-2.61 1.56-2.9a1.47 1.47 0 0 0 1.1-1.19s.14-2.92.31-5.52a102.45 102.45 0 0 0 11.67 14.57s-7-8.8-11.56-15.83c.08-1.1.17-2 .24-2.46 0 0 6.22 10.38 13 17.05s8.33 9.27 8.33 9.27-.64-2.16.64-1.78 3 .42 3.57.83a2.64 2.64 0 0 0 1.65.22 65.4 65.4 0 0 0 2-9.54s.37 4.6-.82 7.71c0-.02 4.67-5.59 4.67-34.14zM86.64 105.3a3.38 3.38 0 0 0-2.81-3.76c-6.06-1.61-20.56 14.24-27.94 40.72-3.66 13.13-1.34 13.56.37 15s2.07 2 4.64-2.19c1-1.57 2.57-5.37 4.7-10.2a91.28 91.28 0 0 1 16.14-4.94c.6 3.06 1.36 6.43 2.34 10.1 5.67 21.32 11.53 22.88 13.18 21.37l1.65-1.52s-.92-1.63-.09-1.93 1.1-1.38.92-2.67.92-.84.92-.84c-9.49-34.28-6.31-46.35-8.88-51.92s-5.14-7.21-5.14-7.21zm-16 28.65a124 124 0 0 1 9.2-16.26s-.61 4.79.59 14.13a82.53 82.53 0 0 0-9.83 2.14zM307.76 19.27s-5.89 4.85-16.85 4.05c-21.79-1.59-35.83 8.1-26.83 24.69.65-7 8.51-19.12 23.24-16-29.94 7.43-17.51 28.38-17.51 28.38-2-6.37.16-8.5.16-8.5 23.06 10.06 38.12-18.03 37.79-32.62zM231.12.21L230.9 0a15.39 15.39 0 0 0-3.45 14.05l5.21 20.55 3.17-20.84A15.39 15.39 0 0 0 231.12.21zm-48.61 41.34v.09a6.43 6.43 0 0 0 3.6 6.2l5.72 2.79-2.87-5.61a6.43 6.43 0 0 0-6.45-3.47zm115.88 93.5c-9.15 3.66-11.1 3.2-11.1 3.2s11.47-3.6 17.08-11.81c-19.52 9.3-32.94 5.66-64.79-16.65 25.38-21.28 25.5-39.08 19.64-45.65l.19.46c-7.58-16.87-41.49-22.74-75.41 12.44 4.82-3.58 5.73-3.87 5.73-3.87-9 8.43-9.88 13.61-9.88 13.61s12.32-11.83 19.71-15c-15.31 10.06-21.35 19.4-21.35 19.4s27.82-29.5 54.91-27.34c26.21 2.09 14.95 26.56-4.28 41.48a121.51 121.51 0 0 0 .62-16l-1.5 16.7-1.06.78c1.71-19.51 2.32-33 2.32-33a3.34 3.34 0 0 1-1.59 1c-.73.06-1.46-.6-2.32.3s-1.34 1.85-1.71 1.69c0 0-3.78 2-5.12 2.52s-2 3.26-2.32 6.16-2.2.31-2.2.31-2.44 25.18-.85 45.93c-.49-14.07.37-16.81.37-16.81s.12 13.8 3.66 23.48c0 0-.61-3 1.46.36a18.6 18.6 0 0 0 5.12 5.29s-1-1.79 0-1.22a2.84 2.84 0 0 0 1.59.49s-1.22-3.27-.61-3.71.61-1 .61-2.15 1.1-19.8 1.1-19.8c29.71 19.48 48.93 31.31 71.99 17.41zm-37.75-66.59a16.13 16.13 0 0 1-1.9 12.85 20.45 20.45 0 0 0 1.91-12.85zm-17.13 80.66l-3 9.14a12.35 12.35 0 0 0 3.37 13l.49.45a12.35 12.35 0 0 0 2.92-13.89zm44.38 39.89h.12a20.4 20.4 0 0 0-4.5-16.51l-17.85-21.24 9.77 25.66a20.4 20.4 0 0 0 12.49 12.06zM128.65 86.72a9.86 9.86 0 0 1 .92 1.06 2.61 2.61 0 0 0-.92-1.06zM162.23 152c.55-3.07 2.56-30.91 5.67-49.88s7-34.58-1-35.35c-6.12-.58-11.1 5.21-11.1 5.21l2.2-3.48s-17.45 14-26.6 55.22a72.86 72.86 0 0 1-.73-24.22c.88-6.52.67-9.4-1.07-11.73a7.22 7.22 0 0 1 .55 3.45c-.64-3.62-4.67-5-8-3.56.82-2.22 3.84-2.8 3.84-2.8s-11.9-.77-19 29.78-.49 43.34.61 45.5 3.17 2.33 4 4.1c0 0-.06-1.47 0-3.93s1-2.48 1.56-.15c-.73-14 6.77-33.32 6.77-33.32s4.58 12.45 7.87 16.37 6.77 12.62 11.53-6a181.16 181.16 0 0 1 13.36-35c-3.05 30.2 2.81 51.29 2.81 51.29a19.92 19.92 0 0 0 .85-2c.49-1.3 1.46 1.64 1.83 3.87s1.1 1.55 1.83 3.07 0-3.66 0-3.66 1.67.28 2.22-2.79zM349.69 45c-16.77 13.22-8.85 15.33-8.85 15.33-1.06 1.47-.06 2.15-.06 2.15s-.19-3.68 6.77-8.2c-9.85 10.16-6 11.39-6 11.39-1.22-1.89 1.5-5.71 6.07-8.27 0 0-4.65 24.52-.29 42.71a6.3 6.3 0 0 1 3.49-4.27c-1.4 1.09-1.08 3.25-1.08 3.25s.09-.68 2.22-2.46 3.49-6 5.72-22.66 4.9-22.2 4.9-22.2c4.38-2 15.94.61 16.11 5.88.52-5.62-7.53-7.52-7.53-7.52 19.16 2.05 9 32.93-10.5 49.26-10.21 8.53-16.19 7.54-17.87 2.9.21 3.18 2.92 5.57 11.14 4.27 0 0-3.89 2.64-8.1 1.72s-3.87-3.39-3.87-3.39c-1.51.72-.72 2.63-.72 2.63a3.57 3.57 0 0 1-2.21 1.55c-1.78.6-.49.18-.92 1.95-.27 1.12 1 1.86 2 2.25a8.3 8.3 0 0 0 2.37 2.77s.49 1.15 2.65 1.62c19.47 4.23 43.09-21.69 47.15-51s-25.77-34.89-42.59-21.67zm-9.52 68.29a8.28 8.28 0 0 0 1 .32 2.93 2.93 0 0 1-.99-.33zm-132.92 30.65c-.12-1.35.49-1.55 1.34-3.43s.61-5.32.61-5.32a14.36 14.36 0 0 1 1.46 2.68s-4.76-19.66-7.57-35.38-10-14.34-16.11-6c-7.55 10.26-10.75 18.76-13 23.73 2.19-7.19 5.71-14.74 12.3-25.39-7.88 11.07-12.15 20.29-14.37 29.87a9.52 9.52 0 0 0-.45 2.09 83.07 83.07 0 0 0-1.27 9.07c-2.69 12.24 1.5 12.85 1.5 12.85a1.3 1.3 0 0 1 1.59.74 12.09 12.09 0 0 0 2.81-5c.4-1.83 1.4-6 3.12-11.82 4.61-2.2 12.83-5.75 16-7.11 3.51 11.48 6.41 13.53 6.41 13.53.61.9 1.59 3.79 3.9 4.95a8.13 8.13 0 0 1 1.83 1.37zm-35.65-13.28l.2-1.09c0 .12.07.19.07.19-.1.36-.18.6-.27.9zm11.48-10.06c3.63-10.14 7.58-15.2 7.58-15.2.8 4.6 1.62 8.58 2.43 12-3.04.83-7.09 2.19-10.01 3.2z" />
  </Svg>
)

export default Logo