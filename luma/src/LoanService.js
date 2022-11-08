import axios from "axios";

const EMPLOYEE_CARD_DETAILS_BASE_URL = "http://localhost:8080/api/loans/";


class LoanService {
    
    getLoanDetails(empID){
        return axios.get(EMPLOYEE_CARD_DETAILS_BASE_URL + empID);
    }
}

export default new LoanService();