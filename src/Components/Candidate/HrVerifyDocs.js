import React from 'react';
import logo2 from './prolifics_logo_blue.png'
import {FiSettings} from 'react-icons/fi'
import {MdOutlineDashboard} from 'react-icons/md'
import {GiLightBackpack} from 'react-icons/gi'
import {BsListTask} from 'react-icons/bs'
import {VscFiles} from 'react-icons/vsc'
import { useParams,Link } from 'react-router-dom';
import CandidatesService from '../../services/CandidatesService';
import { useEffect, useState } from 'react/cjs/react.development';
import DocumentsVerify from './DocumentsVerify';
function HrVerifyDocs() {
    const {id} = useParams();
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [role,setRole] = useState("")
    const [mobileNumber,setMobileNumber]=useState()
    const [interviewDate,setInterviewDate] = useState()
    const candid ={name,email,mobileNumber,role,interviewDate}
    useEffect(()=>{
      CandidatesService.getCandidate(id).then((response) =>{
        setName(response.data.name)
        setEmail(response.data.email)
        setRole(response.data.role)
        setInterviewDate(response.data.interviewDate)
        setMobileNumber(response.data.mobileNumber)
      })
    },[])
  return <div className='total'>
      <div className='menu'>
            <img className='logo-blue' src={logo2} alt="logo2"/><br></br><br></br><br></br>
            <nav>
              <ul>
                <li><h6><MdOutlineDashboard size="1.5em" color='silver'/>Dashboard</h6></li>
                <li><h6><GiLightBackpack size="1.5em" color='silver'/>Recruitment</h6></li>
                <li><h6><VscFiles size="1.5em" color='silver'/>Onboarding</h6></li>
                <li><h6><BsListTask size="1.5em" color='silver'/>Recruitment tasks</h6></li>
                <li><h6><FiSettings size="1.5em" color='silver'/>Settings</h6></li>
              </ul>
            </nav>
          </div>
          <div className='container content size'>
              <h2>Onboarding Documents</h2>
              <table className='table table-striped table-bordered'>
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Mobile Number</td>
                  <td>Role</td>
                  <td>Interview Date</td>
                </tr>
                <tbody>
                  <tr>
                    <td>{candid.name}</td>
                    <td>{candid.email}</td>
                    <td>{candid.mobileNumber}</td>
                    <td>{candid.role}</td>
                    <td>{candid.interviewDate}</td>
                  </tr>
                      
                </tbody>
             </table><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
             <DocumentsVerify/>
            </div>
  </div>;
}

export default HrVerifyDocs;
