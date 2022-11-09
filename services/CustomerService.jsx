
import axios from "axios";

class CustomerService{

    getAllCustomers(){
        return axios.get("http://localhost:8686/loanmanagementsystem/customerapi/getallcustomers");
    }

    addCustomer(customer){
        return axios.post("http://localhost:8686/loanmanagementsystem/customerapi/addcustomer",customer);
    }

    deleteCustomer(Id){
        return axios.delete("http://localhost:8686/loanmanagementsystem/customerapi/deletecustomer/"+Id);
    }

    updateCustomer(customer,Id){
        return axios.put("http://localhost:8686/loanmanagementsystem/customerapi/updatecustomer/"+Id,customer);
    } 

    getCustomer(Id){
        return axios.get("http://localhost:8686/loanmanagementsystem/customerapi/getcustomer/"+Id);
    }

}

export default new CustomerService();