import { NavLink, Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav className='Navbar'>
        <div className="h1-logo">
            <h1>
        <Link to="/">Home</Link>
            </h1>
        </div>
        <div className="right-side-nav">
            <ul>
                <li>
                    <NavLink to="/signup">
                            Sign Up
                        </NavLink>
                </li>
                <li>
                    <a href="">Sign In</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav


//sign in page email and password and submit
//make a signin call to backend jwt
//put in toast for login


//build a login page
//uses states and change listeners
//validation for empty text
//email password
//submit button
// similar code to sign up page


//signup for api key omdbapi.com