/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
// import { format } from 'date-fns'; format day
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
export default function SignUp() {
  const [customGender, setCustomGender] = useState(false);
  const [DoB, setDoB] = useState(new Date());
  const [gender, setGender] = useState("male");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async function(){
    await fetch("http://localhost:8080/signup",{
      method: "POST",
      body: JSON.stringify(
        {
          "username": firstName.toLowerCase() +"."+ lastName.toLowerCase(),
          "email": email,
          "password": password,
          "gender": gender,
          "profilePicture": "https://source.unsplash.com/random/0",
          "bio": "Just a normal person",
        }
      ),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
  return (
    <div>
      <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" style={{minWidth:'650px'}}>
                        <div className="modal-content">
                            {/* head */}
                            <div className="modal-header">
                                <div>
                                    <h2 className="modal-title" id="exampleModalLabel">Sign Up</h2>
                                    <span className="text-muted fs-7">It's quick and easy.</span>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {/* body */}
                            <div className="modal-body">
                                <form>
                                    {/* names */}
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="First name" onChange={(e)=>setFirstName(e.target.value)} required/>
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last name" onChange={(e)=>setLastName(e.target.value)} required/>
                                        </div>
                                    </div>
                                    {/* email & pass */}
                                    <input type="email" className="form-control my-3" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)} required/>
                                    <input type="password" className="form-control my-3" placeholder="New password" onChange={(e)=>setPassword(e.target.value)} required/>
                                    {/* DOB */}
                                    <div className="row my-3">
                                        <span className="text-muted fs-7">Date of birth <i className="fas fa-question-circle" data-bs-toggle="popover" type="button" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i></span>
                                        <div style={{display:"flex", justifyContent:'space-evenly'}}>
                                          <DayPicker
                                            mode="single"
                                            selected={DoB}
                                            onSelect={setDoB}
                                          />
                                          <div style={{display:"flex", flexDirection:'column', justifyContent:'space-evenly', fontSize:'15px',}}>
                                            <span><b>AfterSelect:</b></span>
                                            <span><b>PgDn</b> to go to next month</span>
                                            <span><b>PgUp</b> to go to previous month</span>
                                            <span><b>Shift + PgDn</b> to go to next year</span>
                                            <span><b>Shift + PgUp</b> to go to previous year</span>
                                          </div>
                                        </div>
                                        
                                    </div>
                                    {/* gender */}
                                    <div className="row my-3">
                                        <span className="text-muted fs-7">Gender <i className="fas fa-question-circle" data-bs-toggle="popover" type="button" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i></span>
                                        <div className="col">
                                            <div className="border rounded p-2">
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={()=>{
                                                  setCustomGender(false);
                                                  setGender("male");
                                                }}/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="border rounded p-2">
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={()=>{
                                                  setCustomGender(false);
                                                  setGender("female");
                                                }}/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="border rounded p-2">
                                                <label className="form-check-label" htmlFor="flexRadioDefault3">Custom</label>
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onChange={()=>{setCustomGender(true)}}/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* gender select */}
                                    <div style={{display: customGender?'block':'none'}} id="genderSelect">
                                        <select className="form-select" onChange={()=>setGender(this.value)}>
                                            <option value="Gay">Gay</option>
                                            <option value="Less">Less</option>
                                            <option value="Hidden">Hidden</option>
                                        </select>
                                        <div className="my-3">
                                            <span className="text-muted fs-7">Your pronoun is visible to everyone.</span>
                                            <input type="text" className="form-control" placeholder="Gender (optional)" />
                                        </div>
                                    </div>
                                    {/* disclaimer */}
                                    <div>
                                        <span className="text-muted fs-7">By clicking Sign Up, you agree to our Terms, Data Policy....</span>
                                    </div>
                                    {/* btn */}
                                    <div className="text-center mt-3">
                                        <button type="button" className="btn btn-success btn-lg" data-bs-dismiss="modal" onClick={()=>signUp()}>Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
