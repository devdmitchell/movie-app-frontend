import axios from "axios";

// Axios Instance


 const Axios = axios.create({
    baseURL: "http://localhost:3000/api",  //make it so we don't have to include that portion in the call
    timeout: 50000,                        //if server hangs for more than 50 seconds
})

export default Axios