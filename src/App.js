/** @format */

import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Pages>
        <Sidebar />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </Pages>
    </div>
  )
}

export default App

const Pages = styled.div`
  display: flex;
  margin-top: 10px;
`
