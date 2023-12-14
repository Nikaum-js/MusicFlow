import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_300};
  }

  html {
    scroll-behavior: smooth;
  }

  body { 
    background-color: ${({ theme }) => theme.colors.gray_900};
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  a, u {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`
