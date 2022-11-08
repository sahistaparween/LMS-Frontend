import React, { Component } from "react";
import CustomerService from "../../services/CustomerService";

export class UpdateCustomerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId : this.props.match.params.id,
            customerName: '',
            customerEmail: '',
            customerPhone: '',
            customerAddress: '',
            customerPassword: '',
            
            
            
        }

        this.changeCustomerNameHandler = this.changecustomerNameHandler.bind(this);
        this.changeCustomerEmailHandler = this.changeCustomerEmailHandler.bind(this);
        this.changeCustomerPhoneHandler = this.changeCustomerPhoneHandler.bind(this);
        this.changeCustomerAddressHandler = this.changeCustomerAddressHandler.bind(this);
        this.changeCustomerPasswordHandler = this.changeCustomerPasswordHandler.bind(this);
        
        this.updatecustomer = this.updatecustomer.bind(this)
    }

    /* componentDidMount(){
        CustomerService.getcustomer(this.state.customerId).then((res) =>{
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
 */
    updatecustomer = (e) => {
        e.preventDefault();
        let customer = {
            customerName: this.state.customerName,
            customerEmail: this.state.customerEmail,
            customerPhone: this.state.customerPhone,
            customerAddress: this.state.customerAddress,
            customerPassword: this.state.customerPassword,
           
            
        }
        console.log('Customer =>' + JSON.stringify(customer))
        CustomerService.updatecustomer(customer,this.state.customerId).then(res => {
            alert("Customer updated successfully....")
        })
        //this.props.history.push("/listcustomer");
    }

    cancel(){
        alert("leaving with out saving.....")
    }

    changecustomerNameHandler(event){
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
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2>Edit customer</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                  <label >customer Name</label>
                                  <input type="text" name="customerName" id="" className="form-control" placeholder="Enter customerName" 
                                   value={this.state.customerName} onChange={this.changecustomerNameHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Customer Email</label>
                                  <input type="text" name="customerEmail" id="" className="form-control" placeholder="Enter customerEmail" 
                                   value={this.state.customerEmail} onChange={this.changecustomerEmailHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Customer Phone</label>
                                  <input type="text" name="customerPhone" id="" className="form-control" placeholder="Enter customerPhone" 
                                   value={this.state.customerPhone} onChange={this.changecustomerPhoneHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Customer Address</label>
                                  <input type="text" name="customerAddress" id="" className="form-control" placeholder="Enter customerAddress" 
                                   value={this.state.customerAddress} onChange={this.changecustomerAddressHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Customer Password</label>
                                  <input type="text" name="customerPassword" id="" className="form-control" placeholder="Enter customerPassword" 
                                   value={this.state.customerPassword} onChange={this.changecustomerPasswordHandler} />
                                </div>
                               

                                <button type="button" className="btn btn-success" onClick={this.updatecustomer}>Update</button>
                                <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}