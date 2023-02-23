import axios from "axios"

const USERS_REST_API_URL = 'http://localhost:8001/status';

class maritalStatusService{

    getMaritalStatus(){
        return axios.get(USERS_REST_API_URL);
    }

}

export default new maritalStatusService();