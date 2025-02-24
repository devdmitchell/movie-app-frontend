import './Login.css'
import { useState } from 'react'
import { isEmail } from 'validator'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'



function LogIn({handleUserLogin}) {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate()            //this can be used for redirects

    // const handleOnSubmit = async (e) => {
    //     e.preventDefault()
    //     let isValid = true

    //     if (!isEmail(email)) {
    //         setEmailError('Invalid email format.')
    //         isValid = false
    //     } else {
    //         setEmailError('')
    //     }

    //     if (password.length === 0) {
    //         setPasswordError('Password cannot be empty.')
    //         isValid = false
    //     } else {
    //         setPasswordError('')
    //     }

    //     if (isValid) {
    //         try {
    //             const response = await axios.post('http://localhost:3000/api/user/login', { email, password })
    //             if (response.data) {
    //                 setEmail('')
    //                 setPassword('')
    //                 toast.success('Login Successful!', {
    //                     position: 'top-center',
    //                     autoClose: 2000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     theme: 'dark',
    //                 })
    //             }
    //         } catch (error) {
    //             toast.error('Invalid credentials, please check email and password.', error)
    //         }
    //     }
    // }




        // KYLE'S WAY


  const handleOnSubmit = async (e) => {
      e.preventDefault()
try {
 const response = await axios.post('http://localhost:3000/api/user/login', {email, password})
  setEmail('')
  setPassword('')
  const jwt = response.data.payload
  const decodedJwt = jwtDecode(jwt)
  handleUserLogin({
    username: decodedJwt.username,
    email: decodedJwt.email,
    id: decodedJwt.id
  })
  window.localStorage.setItem('jwt', jwt)
  toast.success('User Logged In.')
  navigate('/movie')
} catch (error) {
  console.log(error)
}
  }

    return (
        // <div className="container">
        //     <div className="form-text">Sign In</div>
        //     <div className="form-div">
        //         <form className="form" onSubmit={handleOnSubmit}>
        //             <div className="form-group-block">
        //                 <div className="block-container">
        //                     <label htmlFor="email">Email</label>
        //                     <input
        //                         type="text"
        //                         id='email'
        //                         placeholder='Email'
        //                         name="email"
        //                         value={email}
        //                         onChange={(event) => setEmail(event.target.value)}
        //                     />
        //                     <div className="errorMessage">{emailError}</div>
        //                 </div>
        //             </div>
        //             <div className="form-group-block">
        //                 <div className="block-container">
        //                     <label htmlFor="password">Password</label>
        //                     <input
        //                         type="password"
        //                         id='password'
        //                         placeholder='Password'
        //                         name="password"
        //                         value={password}
        //                         onChange={(event) => setPassword(event.target.value)}
        //                     />
        //                     <div className="errorMessage">{passwordError}</div>
        //                 </div>
        //             </div>
        //             <div className="button-container">
        //                 <button type="submit">Log In</button>
        //             </div>
        //         </form>
        //     </div>
        // </div>



          //Kyles Way


        <div className="container">
        <div className="form-text">Login</div>
        <div className="form-div">
          <form onSubmit={handleOnSubmit} className="form">
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    id="email" 
                    placeholder='Email' 
                    name="email"
                    value = {email}
                    onChange={(e)=> setEmail(e.target.value)}/>
              </div>
            </div>
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  value={password} 
                  onChange={e => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="button-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default LogIn