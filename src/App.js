/** @format */

import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Users from './pages/Users'
import User from './pages/User'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Pages>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/user/:userId' element={<User />} />
          </Routes>
        </Pages>
      </Router>
    </div>
  )
}

export default App

const Pages = styled.div`
  display: flex;
  margin-top: 10px;
`
