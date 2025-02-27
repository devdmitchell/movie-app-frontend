import { useEffect, useState } from 'react'
import './Profile.css'

function Profile({userID}) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')

    // make a serve call immediately
    useEffect(() => {
        const getinfo = async() => {
            try {
                const response = await Axios.get(`/get-user-by-id/${userID}`)
                const {firstName, lastName, email, username} = response.data.payload
                setFirstName(firstName)
                setLastName(lastName)
                setEmail(email)
                setUsername(username)
            } catch (error) {
                console.log(error)
            }
        }
        getinfo()
    }, [])

        return (
            <div>
                <div className='update-container' >
                    <h3>Update Profile</h3>
                    <form>
                        <div className='input-div' > <input type="text" name='firstName' onChange={e => setFirstName(e.target.value)} value={firstName} /> </div>
                        <div className='input-div' > <input type="text" name='lastName' onChange={e => setLastName(e.target.value)} value={lastName} /> </div>
                        <div className='input-div' > <input type="text" name='email' onChange={e => setEmail(e.target.value)} value={email} /> </div>
                        <div className='input-div' > <input type="text" name='username' onChange={e => setUsername(e.target.value)} value={username} /> </div>
                        <div className='button-div' > <button> Update </button> </div>
                    </form>
                </div>
            </div>
        )
    }

    export default Profile