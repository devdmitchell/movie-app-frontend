import SignUp from "./components/SignUp/SignUp"
import './App.css'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <ToastContainer position="top-center"/>
    <SignUp/>
    </>
  )
}

export default App