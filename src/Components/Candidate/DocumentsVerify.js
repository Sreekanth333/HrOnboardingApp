import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import DocumentsService from '../../services/DocumentsService';
import {TiTickOutline} from 'react-icons/ti'
import {MdOutlineCancelPresentation} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
function DocumentsVerify() {
    let navigate = useNavigate()
    const[documents,setDocuments]=useState([])
  useEffect(()=>{
    DocumentsService.getAllDocuments().then(response=>{
      setDocuments(response.data);
      console.log(response.data);
    })
  },[])
  const colorChange1 =(e)=>{
      e.target.classList.add("crct1")
  }
  const colorChange2=(e)=>{
      e.target.classList.add("wrng1")
  }
  const buttonColor=(e)=>{
      e.target.classList.add("crctBtn")
      let path7 = "/success"
      navigate(path7)
  }
  const buttonColor1 =(e)=>{
      DocumentsService.deleteFiles().then(response=>{
          console.log(response)
      }).catch(error=>{
          console.log(error);
      })
      let path8 = "/candidList"
      navigate(path8)
  }
  return <div className='docsVerify'>
      <div className='container content size2'>
            <h6>Documents Uploaded</h6>
            <table>
                <tbody>
                    {
                        documents.map(doc=>
                            <td>
                                <div className='col-doc'>
                                    <label>Document</label><br></br>
                                    <label id='lab' key={doc.id}>
                                        <u>{doc.fileName}</u><br></br>
                                        <TiTickOutline onClick={e=>colorChange1(e)} className="crct"/>
                                        <MdOutlineCancelPresentation onClick={e=>colorChange2(e)} className='wrng'/>
                                    </label>
                                </div>
                            </td>)
                    }
                </tbody>
            </table>
            <button onClick={e=>buttonColor(e)} className='verified'>Approved</button>
            <button onClick={e=>buttonColor1(e)} className='reject'>ReUpload</button>
      </div>
  </div>;
}

export default DocumentsVerify;
