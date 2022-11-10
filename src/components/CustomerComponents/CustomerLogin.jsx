import React, { Component } from 'react'
import '../../css/CustomerLogin.css'
import { Link } from 'react-router-dom'
import CustomerService from '../../services/CustomerService';
export class CustomerLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Customer: [],
            customerName: '',
            customerPassword: '',
            cus: '',
        }

        this.changeCustomerName = this.changeCustomerName.bind(this);
        this.changeCustomerPassword = this.changeCustomerPassword.bind(this);
        this.validateUser = this.validateUser.bind(this);
    }

    changeCustomerName= (event) => {
        this.setState({ customerName: event.target.value })
    }

    changeCustomerPassword = (event) => {
        this.setState({ customerPassword: event.target.value })
    }

    validateUser = (e) => {
        e.preventDefault();
        let find = 0;
        for (let i = 0; i < this.state.cus.length; i++) {

            if ((this.state.customerName === this.state.cus[i].customerName) && (this.state.customerPassword === this.state.cus[i].customerPassword)) {

                alert(" welcome " + this.state.cus[i].customerName );
                find = 1;
                this.props.history.push("/getcustomer");
            }
        }
        if (find === 0) {
            alert("Inavlid customerName or customerPassword");
        }


    }

    componentDidMount() {
        let Customer = { customerName: this.state.customerName, customerPassword: this.state.customerPassword }
        console.log(this.state.customerName)
        console.log('Customer =>' + JSON.stringify(Customer));
        CustomerService.getAllCustomers().then((res) => {
            this.setState({ Customer: res.data })
            this.state.cus = (res.data);
            console.log(this.state.cus);

        })
    }



    render() {

        return (
            <div className='wholeBody2'>
                <div className="container2" id="container2">
                    <div className="form-container2 sign-in-container2">
                        <form >
                            <h1>Customer Login Page</h1>
                            <div style={{ margin: '30px 0' }}>
                                <input type="text" placeholder="customerName" style={{marginBottom:'30px'}} name="customerName" value={this.state.customerName} onChange={this.changeCustomerName} />
                                <input type="text" placeholder="customerPassword" name="customerPassword" value={this.state.customerPassword} onChange={this.changeCustomerPassword} />
                            </div>
                            <button onClick={this.validateUser}>Login</button>

                            {/* <button >Back to Home page</button> */}
                        </form>
                    </div>

                </div>
                <div className="form-group-loginCustomer" >

                    <div ><Link className="card-link" to="/addcustomer"><button type="button" className="btn  btn-link btn-block">New User? Register Now!</button></Link>  </div>
                </div>

            </div>

        )

    }

}
