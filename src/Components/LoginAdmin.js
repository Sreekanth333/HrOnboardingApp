import React from 'react';
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import logo from './prolifics_logo.png'
function LoginAdmin() {
  const data = {mail:"hr@gmail.com",
                pass:"hr"}
  const [email,setEmail]=useState("")
  const [password,setPassword] = useState("")
  let navigate = useNavigate();
  const loginFunc =()=>{
    if(data.pass == password){
      let path ="/adminList";
      navigate(path);
    }
    else{
      alert("use password as hr");
    }
  }
  return <section className='container1'>
            <div className="first-half">
              <img className='logo' src = {logo} alt="Logo" />
              <big><h3 className='hr-portal c'>HR Login</h3></big> 
            </div>
            <div className='login'>
                <div className='login2'>
                    <form>
                      <h4>Welcome Back!</h4>
                      <small><label>Email</label><br></br></small>
                      <input className='ip' type="email" value ={email} onChange={(e)=>setEmail(e.target.value)} ></input><br></br><br></br>
                      <small><label>Password</label><br></br></small>
                      <input className='ip' id='pass' type ="password" value ={password} onChange={(e)=>setPassword(e.target.value)} ></input><br></br><br></br>
                      <input id='login-btn' type="submit" value="LOGIN" onClick={loginFunc}></input>
                    </form>
                </div>
            </div>
          </section>
}
export default LoginAdmin;
