import axios from "axios";

class ManagerService{

    getAllManager(){
        return axios.get("http://localhost:8686/loanmanagementsystem/managerapi/getallmanager");
    }
}
    export default new ManagerService();