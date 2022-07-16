import axios from "axios";

const CANDIDATES_BASE_REST_API_URL="http://localhost:8080/api/candidates";

class CandidatesService{
    getAllCandidates(){
        return axios.get(CANDIDATES_BASE_REST_API_URL);
    }
    createCandidate(candidate){
        return axios.post(CANDIDATES_BASE_REST_API_URL,candidate);
    }
    getCandidate(mobileNumber){
        return axios.get(CANDIDATES_BASE_REST_API_URL+"/"+mobileNumber);
    }
}

export default new CandidatesService();