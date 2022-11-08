import React, { Component } from 'react'
import CustomerService from '../../services/CustomerService';
import '../../css/ManagerLogin.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export class ManagerLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            Manager: [],
            username: '',
            password: '',
            manager: '',
            managerId:'',
        }
        
        this.changeManagerUsername=this.changeManagerUsername.bind(this);
        this.changeManagerPassword=this.changeManagerPassword.bind(this);
        this.validateManager=this.validateManager.bind(this);
    }

    changeManagerUsername= (event) => {
        this.setState({ username: event.target.value })
    }

    changeManagerPassword= (event) => {
        this.setState({ password: event.target.value })
    }


    validateManager= (e) => {
        e.preventDefault()
        let find=0;
        for (let i = 0; i < this.state.manager.length; i++){
            if ((this.state.username === this.state.manager[i].username) && (this.state.password === this.state.manager[i].password)){
                alert(" welcome " + this.state.manager[i].ManagerFirstName + " " + this.state.manager[i].ManagerLastName);
                find=1;
                this.setState({ManagerId:this.state.manager[i].ManagerId});
                console.log(this.state.restruantId);
                localStorage.setItem("ManagerId",this.state.manager[i].ManagerId);
                this.props.history.push("/ViewLoan/ViewCustomerComponent");
            }
        }
        if(find===0){
            alert("Invalid Username or Password");
        }
    }

    componentDidMount(){
        let Manager= { username: this.state.username, password: this.state.password }
        console.log(this.state.username)
        console.log('Manager =>' + JSON.stringify(Manager));
        CustomerService.getAllCustomers().then((res) => {
            this.setState({ Manager: res.data })
            this.state.manager = (res.data);
            console.log(this.state.manager);
        })
    }

    render(){
        return(
            <div className='wholeBody6'>
                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        <form >
                            <h1>Manager Login Page</h1>
                            <div style={{ margin: '30px 0' }}>
                                <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.changeManagerUsername} />
                                <input type="text" placeholder="Password" name="password" value={this.state.password}  onChange={this.changeManagerPassword}/>
                            </div>
                            <button onClick={this.validateManager}>Login</button>

                            {/* <button >Back to Home page</button> */}
                        </form>
                    </div>

                </div>

            </div>
        )
    }

}
