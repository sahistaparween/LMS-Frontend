
import axios from "axios";
/* const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
} */

class CustomerService{

    getAllCustomers(){
        return axios.get("http://localhost:8686/customer/getallcustomers");
    }

    addCustomer(customer){
        return axios.post("http://localhost:8686/customer/addcustomer",customer);
    }

    deleteCustomer(id){
        return axios.delete("http://localhost:8686/customer/deletecustomer/"+id);
    }

    updateCustomer(customer,id){
        return axios.put("http://localhost:8686/customer/updatecustomer/"+id,customer);
    } 

    getCustomer(id){
        return axios.get("http://localhost:8686/customer/getcustomer/"+id);
    }

}

export default new CustomerService();