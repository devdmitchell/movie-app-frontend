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



