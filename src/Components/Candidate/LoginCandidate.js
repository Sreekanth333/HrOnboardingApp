import React, { useState } from 'react';
import './LoginCandidate.css'
import {useNavigate} from 'react-router-dom';
import logo from './prolifics_logo.png'
import { useEffect } from 'react/cjs/react.development';
import CandidatesService from '../../services/CandidatesService';
function LoginCandidate() {
    
    const [candidMail,setCandidMail] = useState("")
    const [candidPassword,setCandidPassword] = useState("")
    let navigate = useNavigate();
    const [candidates,setCandidates]=useState([]);
  
    useEffect(() =>{
  
      CandidatesService.getAllCandidates().then((response) =>{
        setCandidates(response.data);
        console.log(response.data);
      }).catch(error=>{
        console.log(error);
      })
  
    },[])  
    const loginFunction =()=>{
        console.log(candidPassword);
        candidates.map(can=>{
            if(candidMail==can.email){
                if(candidPassword == can.password){
                    console.log(can.password+"from table");
                    let path = "/candidList"
                    navigate(path);
                }
                else{
                    alert("Invalid Credentials")
                }
            }
        })
    }
  return <section className='container1'>
                <div className="first-half">
                    <img className='logo' src = {logo} alt="Logo" />
                    <h4 className='hr-portal c'>Candidate Login</h4>
                </div>
                <div className='login'>
                    <div className='login2'>
                        <form>
                            <h4>Welcome Back!</h4>
                            <small><label>Email</label><br></br></small>
                            <input className='ip' type="email" value={candidMail} onChange={(e)=>setCandidMail(e.target.value)}></input><br></br><br></br>
                            <small><label>Password</label><br></br></small>
                            <input className='ip' id='pass' type ="password" value={candidPassword} onChange={(e)=>setCandidPassword(e.target.value)}></input><br></br><br></br>
                            <input id='login-btn' type="submit" value="LOGIN" onClick={loginFunction}></input>
                        </form>
                    </div>
                </div>
            </section>           
}
export default LoginCandidate;
