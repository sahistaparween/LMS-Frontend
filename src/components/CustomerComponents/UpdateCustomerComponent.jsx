import React, { Component } from "react";
import CustomerService from "../../services/CustomerService";

export class UpdateCustomerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId : this.props.match.params.Id,
            customerName: '',
            customerEmail: '',
            customerPhone: '',
            customerAddress: '',
            customerPassword: ''
            
            
            
        }

        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
        this.changeCustomerEmailHandler = this.changeCustomerEmailHandler.bind(this);
        this.changeCustomerPhoneHandler = this.changeCustomerPhoneHandler.bind(this);
        this.changeCustomerAddressHandler = this.changeCustomerAddressHandler.bind(this);
        this.changeCustomerPasswordHandler = this.changeCustomerPasswordHandler.bind(this);
        
        this.updateCustomer = this.updateCustomer.bind(this)
    }

     componentDidMount(){
        CustomerService.getCustomerById(this.state.customerId).then((res) =>{
            let customer = res.data;
            this.setState({
                customerName: customer.customerName,
                customerEmail: customer.customerEmail,
                customerPhone: customer.customerPhone,
                customerAddress: customer.customerAddress,
                customerPassword: customer.customerPassword,
                
            })
        })
    }  
 
    updateCustomer = (e) => {
        e.preventDefault();
        let customer = {
            customerName: this.state.customerName,
            customerEmail: this.state.customerEmail,
            customerPhone: this.state.customerPhone,
            customerAddress: this.state.customerAddress,
            customerPassword: this.state.customerPassword,
        }
        
        console.log('customer =>' + JSON.stringify(customer))
        CustomerService.updateCustomer(customer,this.state.customerId).then(res => {
            alert("Customer updated successfully....")
        })
        //this.props.history.push("/listcustomer");
    }

    cancel(){
        alert("leaving with out saving.....")
    }

    changeCustomerNameHandler(event){
        this.setState({customerName:event.target.value})
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
    changeCustomerPasswordHandler(event){
        this.setState({customerPassword:event.target.value})
    }
    

    

    render() {
        return (
            <div>
                <br ></br>
                <div className="container-update">
                    <div className="row1">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2>Edit customer</h2>
                        <div className="card-body-update">
                            <form>
                                <div className="form-group1">
                                  <label >customer Name</label>
                                  <input type="text" name="customerName" id="" className="form-control" placeholder="Enter customerName" 
                                   value={this.state.customerName} onChange={this.changeCustomerNameHandler} />
                                </div>
                                <div className="form-group1">
                                  <label >Customer Email</label>
                                  <input type="text" name="customerEmail" id="" className="form-control" placeholder="Enter customerEmail" 
                                   value={this.state.customerEmail} onChange={this.changeCustomerEmailHandler} />
                                </div>
                                <div className="form-group1">
                                  <label >Customer Phone</label>
                                  <input type="text" name="customerPhone" id="" className="form-control" placeholder="Enter customerPhone" 
                                   value={this.state.customerPhone} onChange={this.changeCustomerPhoneHandler} />
                                </div>
                                <div className="form-group1">
                                  <label >Customer Address</label>
                                  <input type="text" name="customerAddress" id="" className="form-control" placeholder="Enter customerAddress" 
                                   value={this.state.customerAddress} onChange={this.changeCustomerAddressHandler} />
                                </div>
                                <div className="form-group1">
                                  <label >Customer Password</label>
                                  <input type="text" name="customerPassword" id="" className="form-control" placeholder="Enter customerPassword" 
                                   value={this.state.customerPassword} onChange={this.changeCustomerPasswordHandler} />
                                </div>
                                <div>
                                    <button className="btn btn-primary" onClick={this.updateCustomer.bind(this)}>Update</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                            
                                </div>

                                {/* <button type="button" className="btn btn-success" onClick={this.updateCustomer}>Update</button>
                                <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}