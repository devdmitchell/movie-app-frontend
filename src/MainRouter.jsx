import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Home from './components/Home/Home'
import SignUp from './components/SignUp/SignUp'
import Nav from './components/Nav/Nav'

//PrivateRoutes
//PassingProps
//Navigating users

function MainRouter() {
  return (
   <Router>
      <Nav/>
    <Routes>           
      <Route path='/signup' element={<SignUp />} />
      <Route path='/' element={<Home />} />
      <Route/>
    </Routes>
   </Router>
  )
}

export default MainRouter