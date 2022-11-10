import axios from "axios";

class LoanService{

    getAllLoans(){
        return axios.get("http://localhost:8686/loanmanagementsystem/loandetailsapi/getallloandetails");
    }

    saveLoan(loan){
        return axios.post("http://localhost:8686/loanmanagementsystem/loandetailsapi/addloandetails",loan);
    }

    deleteLoan(Id){
        return axios.delete("http://localhost:8686/loanmanagementsystem/loandetailsapi/deleteloandetails/"+Id);
    }

    updateLoan(loan,Id){
        return axios.put("http://localhost:8686/loanmanagementsystem/loandetailsapi/updateloandetails/"+Id,loan);
    } 

    getLoanDetails(Id){
        return axios.get("http://localhost:8686/loanmanagementsystem/loandetailsapi/getloandetails/"+Id);
    }

}

export default new LoanService();