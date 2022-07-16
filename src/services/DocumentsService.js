import axios from 'axios'

const DOCUMENTS_BASE_REST_API_URL="http://localhost:8080/api/files"

class DocumentsService{

    getAllDocuments(){
        return axios.get(DOCUMENTS_BASE_REST_API_URL+"/list");
    }
    deleteFiles(){
        return axios.delete(DOCUMENTS_BASE_REST_API_URL+"/delete")
    }
}

export default new DocumentsService();