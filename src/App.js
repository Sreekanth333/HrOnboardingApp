import './App.css';
import Home from './Components/Candidate/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import CandidateList from './Components/Candidate/CandidateList';
import LoginCandidate from './Components/Candidate/LoginCandidate';
import LoginAdmin from './Components/LoginAdmin';
import AdminList from './Components/Candidate/AdminList';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddCandidate from './Components/Candidate/AddCandidate';
import HrVerifyDocs from './Components/Candidate/HrVerifyDocs';
import AddDocuments from './Components/Candidate/AddDocuments';
import UploadDocuments from './Components/Candidate/UploadDocuments';
import DocumentsVerify from './Components/Candidate/DocumentsVerify';
import SuccessMessage from './Components/Candidate/SuccessMessage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path ="/candidList" element={<CandidateList/>}/>
        <Route path ="/loginCandid" element={<LoginCandidate/>}/>
        <Route path="/loginAdmin" element={<LoginAdmin/>}/>
        <Route path="/adminList" element={<AdminList/>}/>
        <Route path ="/addCandid" element={<AddCandidate/>}/>
        <Route path="/hrVerify/:id" element={<HrVerifyDocs/>}/>
        {/* <Route path="/addDocs" element={<AddDocuments/>}/> */}
        <Route path="/success" element={<SuccessMessage/>}/>
        <Route path="/docsVerify" element={<DocumentsVerify/>}/>
        <Route path="/addFiles" element={<UploadDocuments/>}/>
      </Routes>
    </Router>
  );
}

export default App;
