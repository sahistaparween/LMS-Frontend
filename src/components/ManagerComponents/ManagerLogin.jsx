import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/ManagerLogin.css'
import { useEffect } from "react";

/* import { useLocation } from "react-router-dom"; */
import ManagerService from '../../services/ManagerService';
export class ManagerLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            Manager: [],
            managerName: '',
            managerPassword: '',
            man: ''
            
        }
        
        this.changeManagerName=this.changeManagerName.bind(this);
        this.changeManagerPassword=this.changeManagerPassword.bind(this);
        this.validateManager=this.validateManager.bind(this);
    }

    changeManagerName= (event) => {
        this.setState({ mangerName: event.target.value })
    }

    changeManagerPassword= (event) => {
        this.setState({ managerPassword: event.target.value })
    }
    componentDidMount(){
        /* let Manager= { managerName: this.state.managerName, password: this.state.managerPassword } */
        /* console.log(this.state.managerName)
        console.log('Manager =>' + JSON.stringify(Manager)); */
        ManagerService.getAllManager().then((res) => {
            this.setState({ Manager: res.data })
            this.state.man = (res.data);
            console.log(this.state.man);
        })
    }

    validateManager= (e) => {
       /*  e.preventDefault()
        let find=0;
        for (let i = 0; i < this.state.man.length; i++){
            if ((this.state.managerName === this.state.man[i].managerName) && (this.state.managerPassword === this.state.man[i].managerPassword)){
                alert(" welcome " + this.state.man[i].ManagerName);
                find=1; */
                /* this.setState({ManagerId:this.state.man[i].ManagerId}); */
               
                /* localStorage.setItem("ManagerId",this.state.manager[i].managerId); */
                this.props.history.push("/getallmanager");
            }
        // }
        // if(find===0){
        //     alert("Invalid managerName or Password");
        // }
   // }

    

    render(){
        return(
            <div className='wholeBody6'>
                <div className="container-login" id="container-login">
                    <div className="form-container sign-in-container">
                        <form >
                            <h1>Manager Login Page</h1>
                            <div style={{ margin: '30px 0' }}>
                                <input type="text" placeholder="managerName" name="managerName" defaultvalue={this.state.managerName} onChange={this.changeManagerName} />
                                <input type="text" placeholder="Password" name="password" value={this.state.managerPassword}  onChange={this.changeManagerPassword}/>
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
