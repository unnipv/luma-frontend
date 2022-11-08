import axios from "axios";

const ITEM_MASTER_BASE_URL = "http://localhost:8080/api/items/";

class ItemService {
    
    getDetails(empID){
        return axios.get(ITEM_MASTER_BASE_URL + empID);
    }
}

export default new ItemService();