import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ReactBootstrap from 'react-bootstrap';
import '../../css/GetCustomerById.css';
import CustomerService from "../../services/CustomerService";

import { Dropdown } from 'react-bootstrap';


export class GetCustomerById extends Component{
    constructor(props){
        super(props);
        this.state = {
            Customers: []
        }
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }
    
    componentDidMount(){
        
        CustomerService.getCustomerById(this.props.match.params.Id).then ((res) =>{
            console.log(res.data);
            this.setState({Customers : res.data});
        })
    }
    deleteCustomer(customerId){
        CustomerService.deleteCustomer(customerId).then(res => {
            this.setState({Customers:this.state.Customers.filter(Customer =>Customer.customerId !== customerId)});
        })
    }

    



    render(){
        return(
            
            <><h2 className="text-center">Customer Details</h2>
           {/*  <div class="MyAccount">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  My Account
                  </button>
                <div class="dropdown-menu-my-account-section">
                    <Link class="dropdown-tablecomponents" type="button">Loan History</Link>
                    <Link to={"/addloandetails/"} class="dropdown-item" type="button">Apply For Loan</Link>
                    
                    <Link to={"/getloandetails/"} class="dropdown-item" type="button">View LoanHistory</Link>
                    <Link  to={"/updatecustomer/" + this.state.Customers.customerId} class="dropdown-item" type="button">Update Details</Link>
                </div>
                

            </div> */}
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
               My Account
            </Dropdown.Toggle>

             <Dropdown.Menu>
           
        <Dropdown.Item href="/addloandetails">Apply For Loan</Dropdown.Item>
        <Dropdown.Item href="/getloandetails/Id">View Loan History</Dropdown.Item>
        <Dropdown.Item href="/updatecustomer/Id">Update Customer</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
     <div className="row-getById"> 
            <div className="row-getById">
                <table className="table table-striped table-bordered">
                    
                        <tr>
                            <th>Customer Id</th>
                            <td>{this.state.Customers.customerId}</td>
                        </tr>
                            <tr><th>Customer Name</th>
                            <td>{this.state.Customers.customerName}</td>
                        </tr>
                        <tr>
                            <th>Customer E-Mail</th>
                            <td>{this.state.Customers.customerEmail}</td>
                        </tr>
                        <tr>
                            <th>Customer Phone</th>
                            <td>{this.state.Customers.customerPhone}</td>
                        </tr>
                        <tr>
                            <th>Customer Address</th>
                            <td>{this.state.Customers.customerAddress}</td>
                        </tr>
                        <tr>
                            <th>Customer Gender</th>
                            <td>{this.state.Customers.customerGender}</td>
                        </tr>
                        <tr>
                            <th>Customer DOB</th>
                            <td>{this.state.Customers.customerDOB}</td>
                        </tr> 
                        <tr>
                            <th>Customer BankAccountNo</th>
                            <td>{this.state.Customers.customerBankAccountNo}</td>
                        </tr>  
                        <tr>
                            <th>Customer Income</th>
                            <td>{this.state.Customers.customerIncome}</td>
                        </tr>   
                        <tr>
                            <th>Customer IncomeCategory</th>
                            <td>{this.state.Customers.customerIncomeCategory}</td>
                        </tr>  
                        <tr>
                            <th>Customer PanNo</th>
                            <td>{this.state.Customers.customerPanNo}</td>
                        </tr> 

                        

                 </table> 
                
            </div></div>
            </>
               
            )
    }

}