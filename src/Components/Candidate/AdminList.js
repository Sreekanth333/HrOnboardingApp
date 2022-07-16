import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';
import './AdminList.css'
import { Link, useNavigate,useParams } from 'react-router-dom';
import logo2 from './prolifics_logo_blue.png'
import {FiSettings} from 'react-icons/fi'
import {MdOutlineDashboard} from 'react-icons/md'
import {GiLightBackpack} from 'react-icons/gi'
import {BsListTask} from 'react-icons/bs'
import {VscFiles} from 'react-icons/vsc'
import {BsPersonPlus} from 'react-icons/bs'
import {BiSend} from 'react-icons/bi'
import CandidatesService from '../../services/CandidatesService';
import {IoLogOutOutline} from 'react-icons/io5'
function AdminList() {
  const [candidates,setCandidates]=useState([]);
  
  useEffect(() =>{

    CandidatesService.getAllCandidates().then((response) =>{
      setCandidates(response.data);
      console.log(response.data);
    }).catch(error=>{
      console.log(error);
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
          <div className='container content'>
              <h3 className='text-center'>Onboarding</h3>
              <Link to ="/addCandid">
                <button className='btnForAdd'><BsPersonPlus/>Add Candidate</button>
              </Link>
              <Link to ="/">
                <button className='logout'><IoLogOutOutline color='white'/>Logout</button>
              </Link>
              <table className='table table-bordered table-striped'>
                <thead>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Role</th>
                  <th>Interview Date</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  {
                    candidates.map(
                      candidate =>
                      <tr key ={candidate.mobileNumber}>
                        <td>{candidate.name}</td>
                        <td>{candidate.email}</td>
                        <td>{candidate.mobileNumber}</td>
                        <td>{candidate.role}</td>
                        <td>{candidate.interviewDate}</td>
                        <td>
                          <Link to={`/hrVerify/${candidate.mobileNumber}`}>
                            <BiSend size="1.25em"/>
                          </Link>
                        </td>
                      </tr>
                      )
                  }
                </tbody>
              </table>
          </div>
        </div>
}
;
export default AdminList;
