import React from 'react';
import logo2 from './prolifics_logo_blue.png'
import {MdOutlineDashboard} from 'react-icons/md'
import {VscFiles} from 'react-icons/vsc'
import { useParams,Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import DocumentsService from '../../services/DocumentsService';
import {IoLogOutOutline} from 'react-icons/io5'
function CandidateList() {
  const[documents,setDocuments]=useState([])
  useEffect(()=>{
    DocumentsService.getAllDocuments().then(response=>{
      setDocuments(response.data);
      console.log(response.data);
    })
  },[])
  return <div className='total'>
  <div className='menu'>
        <img className='logo-blue' src={logo2} alt="logo2"/><br></br><br></br><br></br>
        <nav>
          <ul>
            <li><h6><MdOutlineDashboard size="1.5em" color='silver'/>Dashboard</h6></li>
            <li><h6><VscFiles size="1.5em" color='silver'/>Onboarding</h6></li>
          </ul>
        </nav>
      </div>
      <div className='container content'>
          <h6>Requested Documents</h6>
          <Link to="/addFiles">
            <button className='candid-out'><VscFiles/>Browse</button>
          </Link>
          <Link to="/">
            <button className='candid-log'><IoLogOutOutline/>Logout</button>
          </Link>
          <table className='table table-bordered table-striped'>
            <thead>
              <th>Document</th>
              <th>Name</th>
              <th>Size</th>
              <th>Type</th>
            </thead>
            <tbody>
              {
                documents.map(doc=>
                <tr key ={doc.id}>
                  <td>{doc.fileName}</td>
                  <td>{doc.fileName}</td>
                  <td>{doc.size}KB</td>
                  <td>{doc.type}</td>
                </tr>
                )
              }
            </tbody>
         </table>
        </div>
</div>;
}


export default CandidateList;
