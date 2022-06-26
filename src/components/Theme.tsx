import * as React from 'react'
import { createTheme, CssBaseline, ThemeOptions } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

export const baseTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#296d98',
    },
    secondary: {
      main: '#00bfff',
    },
    background: {
      default: '#a2c2d6',
    },
  },
}

const theme = createTheme(baseTheme)

type Props = {
  children: JSX.Element
}

export const Theme: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
