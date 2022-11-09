import React, { Component } from "react";
import { Link } from "react-router-dom";
import CustomerService from "../../services/CustomerService";

export class ListCustomerComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            Customers: []
        }
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }
    
    componentDidMount(){
        CustomerService.getAllCustomers().then ((res) =>{
            console.log(res.data);
            this.setState({Customers : res.data});
        })
    }

    deleteCustomer(customerId){
        CustomerService.deleteCustomer(customerId).then(res =>{
            this.setState({Customers:this.state.Customers.filter(Customer => Customer.customerId !== customerId)});
        })
    }

    /* updateCustomer(customerId){
        CustomerService.updateCustomer(customerId).then(res =>{
            this.setState({Customers:this.state.Customers.filter(Customer => Customer.customerId !== customerId)});
        })
            
    } */

    render(){
        return(
            <>
                <h2 className =  "text-center">Customers List</h2>
                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Customer Name</th>
                                <th>Customer Email</th>
                                <th>Customer Phone</th>
                                <th>Customer Address</th>
                                <th>Customer Gender</th>
                                <th>Customer DOB</th>
                                <th>Customer BankAccountNo</th>
                                <th>Customer Income</th>
                                <th>Customer IncomeCategory</th>
                                <th>Customer PANno</th>

                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                              {
                                this.state.Customers.map(
                                    Customer =>
                                    <tr key={Customer.customerId}>
                                        <td>{Customer.customerName}</td>
                                        <td>{Customer.customerEmail}</td>
                                        <td>{Customer.customerPhone}</td>
                                        <td>{Customer.customerAddress}</td>
                                        <td>{Customer.customerGender}</td>
                                        <td>{Customer.customerDOB}</td>
                                        <td>{Customer.customerBankAccountNo}</td>
                                        <td>{Customer.customerIncome}</td>
                                        <td>{Customer.customerIncomeCategory}</td>
                                        <td>{Customer.customerPANno}</td>
                                        <td>
                                        <button type="button" className="btn btn-success" style={{marginRight:"10px"}}>
                                            <Link to={"/updatecustomer/" + Customer.customerId} className="stylelink">
                                                Update
                                            </Link> 
                                        </button>
                                        <button className="btn btn-danger" onClick={()=>this.deleteCustomer(Customer.customerId)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                              }
                            </tbody>
                    </table>
                </div>
            </>
        )
    }

}