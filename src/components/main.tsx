import styled from 'styled-components'

const Main = styled.main`
  width: 100%;
  max-width: 1280px;
  padding: 0 12px;
  margin: 32px auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    margin: 16px auto;
  }
`

export default Main
