/** @format */

import React from 'react'
import styled from 'styled-components'
import Features from '../components/Features'

function Home() {
  return (
    <Container>
      <Features />
    </Container>
  )
}

export default Home

const Container = styled.div`
  flex: 4;
`
