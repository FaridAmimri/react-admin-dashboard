/** @format */

import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function Users() {
  const theme = createTheme({
    palette: {
      neutral: {
        main: '#64748B',
        contrastText: '#fff'
      }
    }
  })

  return (
    <Container>
      <Title>New join Members</Title>
      <List>
        <User>
          <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'></Image>
          <Details>
            <Username>Anna Keller</Username>
            <Job>Software Engineer</Job>
          </Details>
          <ThemeProvider theme={theme}>
            <Button
              variant='outlined'
              color='neutral'
              size='small'
              startIcon={<VisibilityIcon />}
            >
              Display
            </Button>
          </ThemeProvider>
        </User>
        <User>
          <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'></Image>
          <Details>
            <Username>Anna Keller</Username>
            <Job>Software Engineer</Job>
          </Details>
          <ThemeProvider theme={theme}>
            <Button
              variant='outlined'
              color='neutral'
              size='small'
              startIcon={<VisibilityIcon />}
            >
              Display
            </Button>
          </ThemeProvider>
        </User>
        <User>
          <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'></Image>
          <Details>
            <Username>Anna Keller</Username>
            <Job>Software Engineer</Job>
          </Details>
          <ThemeProvider theme={theme}>
            <Button
              variant='outlined'
              color='neutral'
              size='small'
              startIcon={<VisibilityIcon />}
            >
              Display
            </Button>
          </ThemeProvider>
        </User>
        <User>
          <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'></Image>
          <Details>
            <Username>Anna Keller</Username>
            <Job>Software Engineer</Job>
          </Details>
          <ThemeProvider theme={theme}>
            <Button
              variant='outlined'
              color='neutral'
              size='small'
              startIcon={<VisibilityIcon />}
            >
              Display
            </Button>
          </ThemeProvider>
        </User>
      </List>
    </Container>
  )
}

export default Users

const Container = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-right: 20px;
`

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const User = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`

const Image = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-fit: cover;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
`

const Username = styled.span`
  font-weight: 600;
`

const Job = styled.span`
  font-weight: 300;
`
