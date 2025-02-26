import { jwtDecode } from "jwt-decode";



export const checkIfUserIsAuth = () =>{
    // check if JWT exist
    const jwt = window.localStorage.getItem('jwt')
    if(jwt){
        // check not expired
        const currentTime = Date.now() / 1000
        const decodedJwt = jwtDecode(jwt)
        // return boolean
        return decodedJwt.exp > currentTime
    }else{
        return false
    }
}

