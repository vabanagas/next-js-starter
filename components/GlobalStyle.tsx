import { css, createGlobalStyle } from 'styled-components'

const Body = css`
  body {
    margin: 0;
    padding: 0;
  }
`

const GlobalStyle = createGlobalStyle`
  ${Body}
`

export default GlobalStyle
