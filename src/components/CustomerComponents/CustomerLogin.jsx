import React, { Component } from 'react'
import '../../css/CustomerLogin.css'
import { Link } from 'react-router-dom'
import CustomerService from '../../services/CustomerService';
export class CustomerLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Customer: [],
            customerId: '',
            customerPassword: '',
            cus: '',
        }

        this.changeCustomerIdHandler = this.changeCustomerIdHandler.bind(this);
    this.changeCustomerPasswordHandler = this.changeCustomerPasswordHandler.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    
    }
    componentDidMount() {
             
    CustomerService.getAllCustomers().then ((res) =>{
        console.log(res.data);
        this.setState({Customer : res.data});
        this.state.man = (res.data);

        })
    }

    changeCustomerIdHandler(event){
        this.setState({customerId:event.target.value})
      }
      changeCustomerPasswordHandler(event){
        this.setState({customerPassword:event.target.value})
      }

      buttonClickHandler = (e) => {

        e.preventDefault();
        let find = 0;
        for (let i = 0; i < this.state.cus.length; i++) {
      
            if ((this.state.customerId == this.state.cus[i].customerId) && (this.state.customerPassword == this.state.cus[i].customerPassword)) {
      
                alert(" welcome " + " " + this.state.customerId);
                find = 1;
                this.props.history.push("/getcustomer/"+this.state.customerId);
            }
        }
        if (find === 0) {
            alert("Inavlid Username or Password");
        }
      }
      

    

   



    render() {
        return(
            <div className="Customer">
      
            <form className="Auth-form2">
              <div className="container">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="form">
                  <label>Enter Customer Id</label>
                  <input type="text" name="customerId" Id="" className="form-control" placeholder="Id" 
                  value={this.state.customerId} onChange = {this.changeCustomerIdHandler}/>
              </div>
              <div className="form">
                <label>Enter Password</label>
                  <input type="text" name="customerPassword" id="" className="form-control" placeholder="Password" 
                  value={this.state.customerPassword} onChange = {this.changeCustomerPasswordHandler}/>
                </div>
      
                <div>                                            
                    <button className="btn btn-danger" onClick={this.buttonClickHandler}>Sign in</button>
                </div>
                <p className="forgot-password text-right mt-2">
                  Forgot <a href="/">password?</a>
                </p>
              </div>
            </form>
            
          </div>
          
        )

        

    }

}
