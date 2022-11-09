
import CustomerService from "../../services/CustomerService";
import React from "react";
import '../../css/AddCustomer.css';
import image1 from '../../images/image1.png';


export class AddCustomerComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            customerName : '',
            customerPassword :'',
            customerEmail : '',
            customerPhone : '',
            customerAddress : '',
            customerDOB :'',
            customerGender :'',
            customerBankAccountNo :'',
            customerIncome :'',
            customerIncomeCategory :'',
            customerPANno :'',

            
        }

        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
        this.changeCustomerPasswordHandler = this.changeCustomerPasswordHandler.bind(this);
        this.changeCustomerEmailHandler = this.changeCustomerEmailHandler.bind(this);
        this.changeCustomerPhoneHandler = this.changeCustomerPhoneHandler.bind(this);
        this.changeCustomerAddressHandler = this.changeCustomerAddressHandler.bind(this);
        this.changeCustomerDOBHandler = this.changeCustomerDOBHandler.bind(this);
        this.changeCustomerGenderHandler = this.changeCustomerGenderHandler.bind(this);
        this.changeCustomerBankAccountNoHandler = this.changeCustomerBankAccountNoHandler.bind(this);
        this.changeCustomerIncomeHandler = this.changeCustomerIncomeHandler.bind(this);
        this.changeCustomerIncomeCategoryHandler = this.changeCustomerIncomeCategoryHandler.bind(this);
        this.changeCustomerPANnoHandler = this.changeCustomerPANnoHandler.bind(this);
        this.addCustomer = this.addCustomer.bind(this);
    }
    addCustomer = (e) =>{
        e.preventDefault();
        let customer = {customerName : this.state.customerName,
                        customerPassword:this.state.customerPassword,
                        customerEmail : this.state.customerEmail,
                        customerPhone: this.state.customerPhone,
                        customerAddress: this.state.customerAddress,
                        customerDOB: this.state.customerDOB,
                        customerGender: this.state.customerGender,
                        customerBankAccountNo: this.state.customerBankAccountNo,
                        customerIncome: this.state.customerIncome,
                        customerIncomeCategory: this.state.customerIncomeCategory,
                        customerPANno: this.state.customerPANno,
                    
                    }
        console.log('Customer =>'+JSON.stringify(customer))
        CustomerService.addCustomer(customer).then(res =>{
            alert("Customer added succesfully....")
        })
    }

    changeCustomerNameHandler(event){
        this.setState({customerName:event.target.value})
    }
    changeCustomerPasswordHandler(event){
        this.setState({customerPassword:event.target.value})
    }
    changeCustomerEmailHandler(event){
        this.setState({customerEmail:event.target.value})
    }
    changeCustomerPhoneHandler(event){
        this.setState({customerPhone:event.target.value})
    }
    changeCustomerAddressHandler(event){
        this.setState({customerAddress:event.target.value})
    }
    changeCustomerDOBHandler(event){
        this.setState({customerDOB:event.target.value})
    }
    changeCustomerGenderHandler(event){
        this.setState({customerGender:event.target.value})
    }
    changeCustomerBankAccountNoHandler(event){
        this.setState({customerBankAccountNo:event.target.value})
    }
    changeCustomerIncomeHandler(event){
        this.setState({customerIncome:event.target.value})
    }
    changeCustomerIncomeCategoryHandler(event){
        this.setState({customerIncomeCategory:event.target.value})
    }
    changeCustomerPANnoHandler(event){
        this.setState({customerPANno:event.target.value})
    }
    cancel(){
        alert("Customer  not added ")
    }
    render(){
        return(
            
            <div>

                <br></br>
                <div className="container-customer">
                    <div className="row-register">
                        <div className="Main">
                            <h2>Customer Registration</h2>
                        </div>
                         <div className="image">
                            <img src={image1} alt="Rgister" />
                            </div> 
                        <div className="form-register">    
                            <form>
                                <div className="form-group">
                                  <label>Enter Name</label>
                                  <input type="text" name="customerName" id="" className="form-control" placeholder="Name" 
                                  value={this.state.customerName} onChange = {this.changeCustomerNameHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Password</label>
                                  <input type="text" name="customerPasword" id="" className="form-control" placeholder="Password" 
                                  value={this.state.customerPassword} onChange = {this.changeCustomerPasswordHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter E-Mail</label>
                                  <input type="text" name="customerEmail" id="" className="form-control" placeholder="E-Mail" 
                                  value={this.state.customerEmail} onChange = {this.changeCustomerEmailHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Phone</label>
                                  <input type="text" name="customerPhone" id="" className="form-control" placeholder="Phone" 
                                  value={this.state.customerPhone} onChange = {this.changeCustomerPhoneHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Address</label>
                                  <input type="text" name="customerAddress" id="" className="form-control" placeholder="Address" 
                                  value={this.state.customerAddress} onChange = {this.changeCustomerAddressHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Date Of Birth</label>
                                  <input type="text" name="customerDOB" id="" className="form-control" placeholder="date of birth" 
                                  value={this.state.customerDOB} onChange = {this.changeCustomerDOBHandler}/>
                                </div>
                                
                                <div className="form-group">
                                <label>Enter Gender</label>
                                  <input type="text" name="customerGender" id="" className="form-control" placeholder="Gender" 
                                  value={this.state.customerGender} onChange = {this.changeCustomerGenderHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter BankAccountNo</label>
                                  <input type="text" name="customerBankAccountNo" id="" className="form-control" placeholder="BankAccountNo" 
                                  value={this.state.customerBankAccountNo} onChange = {this.changeCustomerBankAccountNoHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Income</label>
                                  <input type="text" name="customerIncome" id="" className="form-control" placeholder="Income" 
                                  value={this.state.customerIncome} onChange = {this.changeCustomerIncomeHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter IncomeCategory</label>
                                  <input type="text" name="customerIncomeCategory" id="" className="form-control" placeholder="IncomeCategory" 
                                  value={this.state.customerIncomeCategory} onChange = {this.changeCustomerIncomeCategoryHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter PANno</label>
                                  <input type="text" name="customerPANno" id="" className="form-control" placeholder="PANno" 
                                  value={this.state.customerPANno} onChange = {this.changeCustomerPANnoHandler}/>
                                </div>



                                <div>
                                    <button className="btn btn-primary" onClick={this.addCustomer.bind(this)}>Add</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                            
                                </div>
                                <br></br>
                                <div>
                   {/* <footer className="style">
                   <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2023 Copyright:
                    <a className="text-dark" href="">LoanManagementSystem.com</a>
                    </div>
                    </footer> */}
                    </div>

                            </form>
                         
                         </div>
                    </div>
                    </div>
                    
                </div>
          
            
        )
    }
}