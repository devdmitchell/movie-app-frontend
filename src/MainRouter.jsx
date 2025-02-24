import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Home from './components/Home/Home'
import SignUp from './components/SignUp/SignUp'
import Nav from './components/Nav/Nav'
import Movie from './components/Movie/Movie'
import LogIn from './components/Login/Login'

//PrivateRoutes
//PassingProps
//Navigating users

function MainRouter({user, handleUserLogin, handleUserLogout }) {
  return (
   <Router>
      <Nav user={user} handleUserLogout={handleUserLogout} />
    <Routes>           
      <Route path='/signup' element={<SignUp />} />
      <Route path='/movie' element={<Movie />}/>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LogIn handleUserLogin = {handleUserLogin} />} />
    </Routes>
   </Router>
  )
}

export default MainRouter