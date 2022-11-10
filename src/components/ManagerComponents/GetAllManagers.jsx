import React, { Component } from "react";
import { Link } from "react-router-dom";
import ManagerService from "../../services/ManagerService";


export class GetAllManagers extends Component{
    constructor(props){
        super(props);
        this.state = {
            manager: []
        }
    }
    
    componentDidMount(){
        ManagerService.getAllManager().then ((res) =>{
            console.log(res.data);
            this.setState({manager : res.data});
        })
    }

    

    updateLoan(loanId){
            
    }

    render(){
        return(
            <>
                <h2 className =  "text-center">Manager Data</h2>
                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th></th>
                                <th>Manager Id</th>
                                <th>Manager Name</th>
                                <th>Manger Email</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                              {
                                this.state.manager.map(
                                    manager=>
                                    <tr key={manager.managerId}>
                                        <td>{manager.managerName}</td>
                                        <td>{manager.managerEmail}</td>
                                    
                                        <td>
                                        
                                        
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