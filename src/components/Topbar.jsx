/** @format */

import React from 'react'
import styled from 'styled-components'

function Topbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>BiBi.</Logo>
        </Left>
        <Right></Right>
      </Wrapper>
    </Container>
  )
}

export default Topbar

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
`

const Wrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div``

const Right = styled.div``

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`
