import { useState } from 'react'
import './SignIn.css'
import { isEmail } from 'validator'
import axios from 'axios'
import { toast } from 'react-toastify'

function SignIn() {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        let isValid = true

        if (!isEmail(email)) {
            setEmailError('Invalid email format.')
            isValid = false
        } else {
            setEmailError('')
        }

        if (password.length === 0) {
            setPasswordError('Password cannot be empty.')
            isValid = false
        } else {
            setPasswordError('')
        }

        if (isValid) {
            try {
                const response = await axios.post('http://localhost:3000/api/user/login', { email, password })
                if (response.data) {
                    setEmail('')
                    setPassword('')
                    toast.success('Login Successful!', {
                        position: 'top-center',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'dark',
                    })
                }
            } catch (error) {
                toast.error('Invalid credentials, please check email and password.')
            }
        }
    }

    return (
        <div className="container">
            <div className="form-text">Sign In</div>
            <div className="form-div">
                <form className="form" onSubmit={handleOnSubmit}>
                    <div className="form-group-block">
                        <div className="block-container">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id='email'
                                placeholder='Email'
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <div className="errorMessage">{emailError}</div>
                        </div>
                    </div>
                    <div className="form-group-block">
                        <div className="block-container">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id='password'
                                placeholder='Password'
                                name="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <div className="errorMessage">{passwordError}</div>
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="submit">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn