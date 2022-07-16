import React from 'react';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import {Link,useNavigate} from 'react-router-dom'
function UploadDocuments() {
    const [filesUpload,setFilesUpload]=useState()
    let navigate = useNavigate()
    const addFiles =(e)=>{
        e.preventDefault()
        let files = e.target.files
        let formData = new FormData();
        formData.append("name",files)
        axios({
            url:'http://localhost:8080/api/files/multiFile',
            method:"POST",
            headers:{"Content-Type":"multipart/form-date",
                    "Accept":"application/json",
                    "type":"formData"},
            data:formData
        }).then((response)=>{
            console.log(response.data);
            let path6 ="/candidList"
            navigate(path6)
        }).catch(error=>{
            console.log(error);
        })
    }
  return <div>
      <br></br><br></br><br></br>
      <div className='container'>
          <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Upload Documents</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Upload Files</label>
                                <input className ='form-control-file' type="file" multiple onChange={e=>setFilesUpload(e.target.files)}></input>
                            </div>
                            <button className='btn btn-success float' onClick={e=>addFiles(e)}>Upload</button>
                            <Link className="btn btn-danger float" to="/candidList">Cancel</Link>
                        </form>
                    </div>
                </div>
          </div>
      </div>
  </div>;
}

export default UploadDocuments;
