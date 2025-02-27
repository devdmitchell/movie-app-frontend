import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home/Home'
import SignUp from './components/SignUp/SignUp'
import Nav from './components/Nav/Nav'
import Movie from './components/Movie/Movie'
import LogIn from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Profile from './components/Profile/Profile'

//PrivateRoutes
//PassingProps
//Navigating users

function MainRouter({ user, handleUserLogin, handleUserLogout }) {
  return (
    <Router>
      <Nav user={user} handleUserLogout={handleUserLogout} />
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/movie' element={
          <PrivateRoute>
            <Movie />
          </PrivateRoute>
        } />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={
          user ? <Navigate to="/movie" /> :
            <LogIn handleUserLogin={handleUserLogin} />} />
        <Route path='/profile' element={
          <PrivateRoute>
            <Profile userID = {user.id} />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  )
}

export default MainRouter