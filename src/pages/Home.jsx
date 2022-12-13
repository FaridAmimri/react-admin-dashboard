/** @format */

import React from 'react'
import styled from 'styled-components'
import { userData } from '../data'
import Features from '../components/Features'
import Chart from '../components/Chart'
import Users from '../components/Users'
import Transactions from '../components/Transactions'

function Home() {
  return (
    <Container>
      <Features />
      <Chart
        data={userData}
        title='User Analytics'
        dataKey='Active User'
        grid
      />
      <Widgets>
        <Users />
        <Transactions />
      </Widgets>
    </Container>
  )
}

export default Home

const Container = styled.div`
  flex: 4;
`

const Widgets = styled.div`
  display: flex;
  margin: 20px 0 20px 20px;
`
