import { useState } from "react"
import LoginPage from "./LoginPage/LoginPage"
import HomePage from "./HomePage/HomePage"

export default function App() {
  const [login, isLogin] = useState(false);
  const [userLogin, setUserLogin] = useState(null);
  return (
    <>
    {!login ? <LoginPage {...{isLogin,setUserLogin}}/>:<HomePage {...{isLogin,userLogin}}/>}
    </>
  )
}
