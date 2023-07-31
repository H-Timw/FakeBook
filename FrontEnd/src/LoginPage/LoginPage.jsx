/* eslint-disable react/prop-types */
import { useState } from "react"
import SignUp from "./SignUp";
/* eslint-disable react/no-unescaped-entities */
export default function LoginPage({isLogin,setUserLogin}) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const checkLogin = async function(){
    await fetch(`http://localhost:8080/login`,{
        method: 'POST',
        body: JSON.stringify(
            {
                "username" : username,
                "password" : password
            }
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.text())
    .then(data => data.length ==0 ? null : JSON.parse(data) )
    .then(user => {
            if(user!=null){
                setUserLogin(user);
                isLogin(true);
            }else{
                isLogin(false);
                window.alert("Login failed, please try again or SignUp");
            }
        }
    )
    .catch(err=> console.log(err));
  }
  return (
    <div className="login-page">
      <div className="container mt-5 pt-5 d-flex flex-column flex-lg-row justify-content-evenly">
        {/* heading */}
        <div className="text-center text-lg-start mt-0 pt-0 mt-lg-5 pt-lg-5">
            <h1 className="text-primary fw-bold fs-0">flexbook</h1>
            <p className="w-75 mx-auto fs-4 mx-lg-0">Flexbook helps you connect and share with the people in your life.</p>
        </div>
        {/* form card */}
        <div style={{maxWidth: '28rem', width: '100%'}}>
            {/* login form */}
            {/* first was form tag */}
            <div className="bg-white shadow rounded p-3 input-group-lg">
                <input
                  type="email"
                  className="form-control my-3"
                  placeholder="Email address or phone number"
                  onChange={(e)=>setUserName(e.target.value)}
                  />
                <input
                  type="password" 
                  className="form-control my-3"
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                  />
                <button className="btn btn-primary w-100 my-3" onClick={()=>checkLogin()}>Log In</button>
                <a href="#" className="text-decoration-none text-center"><p>Forgotten password?</p></a>
                {/* create form */}
                <hr />
                <div className="text-center my-4">
                    <button className="btn btn-success btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#createModal">Create New Account</button>
                </div>
                {/* create modal */}
                <SignUp/>
                {/* modal end */}
            </div>
            {/* tag */}
            <div className="my-5 pb-5 text-center">
                <p className="fw-bold"><a href="#" className="text-decoration-none text-dark">Createa a Page</a> <span className="fw-normal">htmlFor a celebrity, band or business.</span></p>
            </div>
        </div>
      </div>
      <footer className="bg-white p-4 text-muted">
    <div className="container">
        {/* language */}
        <div className="d-flex flex-wrap">
            <p className="mx-2 fs-7 mb-0">English (US)</p>
            <p className="mx-2 fs-7 mb-0">Tiếng Việt</p>
            <p className="mx-2 fs-7 mb-0">中文(台灣)</p>
            <p className="mx-2 fs-7 mb-0">한국어</p>
            <p className="mx-2 fs-7 mb-0">日本語</p>
        </div>
        <hr />
        {/* actions */}
        <div className="d-flex flex-wrap">
            <p className="mx-2 fs-7 mb-0">Sign Up</p>
            <p className="mx-2 fs-7 mb-0">Login</p>
            <p className="mx-2 fs-7 mb-0">Messenger</p>
            <p className="mx-2 fs-7 mb-0">Facebook Lite</p>
            <p className="mx-2 fs-7 mb-0">Watch</p>
        </div>
        {/* copy */}
        <div className="mt-4 mx-2">
            <p className="fs-7">Flexbook &copy; 2023</p>
        </div>
    </div>
</footer>
    </div>
  )
}
