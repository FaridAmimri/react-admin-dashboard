/** @format */

import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'

function MuiButton({ color, startIcon, type }) {
  const theme = createTheme({
    palette: {
      gray: {
        main: '#64748B'
      },
      green: {
        main: '#3bb077'
      }
    }
  })
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          variant='outlined'
          color={color}
          size='small'
          startIcon={startIcon}
        >
          {type}
        </Button>
      </ThemeProvider>
    </div>
  )
}

export default MuiButton
