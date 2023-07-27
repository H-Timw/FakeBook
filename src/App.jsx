import { useState } from "react"
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";

export default function App() {
  const [login, isLogin] = useState(false);
  return (
    <>
    {!login ? <LoginPage {...{isLogin}}/>:<HomePage {...{isLogin}}/>}
    </>
  )
}
