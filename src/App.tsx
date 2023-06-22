import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import theme from './global/styles/theme'
import { GlobalStyle } from './global/styles/global'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
