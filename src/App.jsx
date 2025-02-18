import SignUp from "./components/SignUp/SignUp"
import './App.css'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import MainRouter from "./MainRouter"

function App() {
  return (
    <>              {/*single parent element requirement*/}
    <ToastContainer position="top-center"/>    {/*banner for container, feedback for user*/}
    <MainRouter/>
    </>
  )
}

export default App