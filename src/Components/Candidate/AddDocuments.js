import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development';
import DocumentsService from '../../services/DocumentsService';
import axios from 'axios';
function AddDocuments() {
    const [relievingLetter,setRelievingLetter] = useState()
    const[certificate,setCertificate] = useState()
    const [identity,setIdentity] = useState()
    const [paySlips,setPaySlips] = useState()
    const [passport,setPassport] = useState()
    let navigate=useNavigate()
        const addDocs=(e)=>{
            e.preventDefault()
            // const document = {relievingLetter,certificate,identity,paySlips,passport};
            // DocumentsService.addDocuments(document).then((response)=>{
            //     console.log(response.data);
            //     let path5 ="/candidList"
            //     navigate(path5)
            // }).catch(error=>{
            //     console.log(error);
            // })
            // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            let files = e.target.files;        
            const formData = new FormData()
            formData.append("files",files)
            axios.post("http://localhost:8080/api/files/multiFile",formData,{headers:{"content-type":"multipart/form-data"}}).then((response)=>{
             console.log(response.data)
             let path5="/candidList"
             navigate(path5)
         }).catch(error =>{
             console.log(error);
         })
        
    }
  return <div>
      <br></br><br></br>
      <div className='container'>
          <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3'>
                  <h2 className='text-center'>Add Documents</h2>
                  <div className='card-body'>
                      <form id ="formDat">
                          <div className='form-group mb-2'>
                              <label className='form-label'>Relieving Letter:</label>
                              <input type="file" multiple className='form-control' onChange={e=>setRelievingLetter(e.target.files[0])}></input>
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Education Certificate:</label>
                              <input type="file" className='form-control' onChange={e=>setCertificate(e.target.files[0])}></input>
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Identity Proof:</label>
                              <input type="file" className='form-control' onChange={e=>setIdentity(e.target.files[0])}></input>
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Pay Slips for last 3 months:</label>
                              <input type="file" className='form-control' onChange={e=>setPaySlips(e.target.files[0])}></input>
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Passport Copy:</label>
                              <input type="file" className='form-control' onChange={e=>setPassport(e.target.files[0])}></input>
                          </div>
                          <button className='btn btn-success float' onClick={e=>addDocs(e)}>Upload</button>
                          <Link className="btn btn-danger float" to="/candidList">Cancel</Link>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>;
}

export default AddDocuments;
