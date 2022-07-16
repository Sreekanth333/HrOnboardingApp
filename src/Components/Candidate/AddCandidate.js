import React from 'react';
import { useNavigate,Link} from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import CandidatesService from '../../services/CandidatesService';

function AddCandidate() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [mobileNumber,setMobileNumber] = useState()
    const [role,setRole] = useState("")
    const [password,setPassword] = useState("")
    const [interviewDate,setInterviewDate] = useState()
    let navigate = useNavigate();
    const saveCandidate = (e) =>{
        e.preventDefault();
        const candidate = {name,email,mobileNumber,role,interviewDate,password}
        CandidatesService.createCandidate(candidate).then((response) =>{
            console.log(response.data);
            let path3 = "/adminList";
            navigate(path3);
        }).catch(error =>{
            console.log(error);
        })
    }
  return <div>
      <br /><br />
      <div className='container'>
          <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3'>
                  <h2 className='text-center'>Add Candidate</h2>
                  <div className='card-body'>
                      <form>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Name :</label>
                              <input 
                                type="text"
                                placeholder='Enter name'
                                // value={name}
                                className='form-control'
                                onChange={(e)=>setName(e.target.value)}
                              ></input>
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Email Id:</label>
                              <input 
                                type="email"
                                placeholder='Enter email'
                                //value={email}
                                className='form-control'
                                onChange={(e)=>setEmail(e.target.value)}
                              ></input>
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Password:</label>
                              <input 
                                type="password"
                                placeholder='Enter password'
                                //value={email}
                                className='form-control'
                                onChange={(e)=>setPassword(e.target.value)}
                              ></input>
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Mobile Number :</label>
                              <input 
                                type="number"
                                placeholder='Enter number'
                                //value={mobileNumber}
                                className='form-control'
                                onChange={(e)=>setMobileNumber(e.target.value)}
                              ></input>
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Role :</label>
                              <input 
                                type="text"
                                placeholder='Enter role'
                                //value={role}
                                className='form-control'
                                onChange={(e)=>setRole(e.target.value)}
                              ></input>
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Interview Date :</label>
                              <input 
                                type="date"
                                placeholder='Enter name'
                                //value={interviewDate}
                                className='form-control'
                                onChange={(e)=>setInterviewDate(e.target.value)}
                              ></input>
                          </div>
                          <button className='btn btn-success float' onClick={(e)=>saveCandidate(e)}>Submit</button>
                          <Link to="/adminList" className='btn btn-danger float'>Cancel</Link>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>;
}

export default AddCandidate;
