
import axios from "axios";

class CustomerService{

    getAllCustomers(){
        return axios.get("http://localhost:8080/customer/getallcustomers");
    }

    addCustomer(customer){
        return axios.post("http://localhost:8080/customer/savecustomer",customer);
    }

    deleteCustomer(id){
        return axios.delete("http://localhost:8080/customer/deletecustomer/"+id);
    }

    updateCustomer(customer,id){
        return axios.put("http://localhost:8080/customer/updatecustomer/"+id,customer);
    } 

    getCustomer(id){
        return axios.get("http://localhost:8080/customer/getcustomer/"+id);
    }

}

export default new CustomerService();