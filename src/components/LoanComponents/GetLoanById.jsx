import React, { Component } from 'react'
//import './ListLoanComponents.css'

import LoanService from '../../services/LoanService'

export class GetLoanById extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loans: []
        }
        console.log("from constructor");
        }
    

    componentDidMount() {
        LoanService.getLoanDetails(this.props.match.params.Id).then((res) => {
            console.log(res.data);
            this.setState({loans : res.data});


        })
       

    }
   render() {
        
        
        return (

            <div className='loanbyid'>
                <h1>Loan Details</h1>
                <div className="row-getById"> 
            <div className="row-getLoanById">
                <table className="table table-striped table-bordered">
                    
                        <tr>
                            <th>Loan Id</th>
                            <td>{this.state.loans.loanId}</td>
                        </tr>
                            <tr><th>Loan Type</th>
                            <td>{this.state.loans.loanType}</td>
                        </tr>
                        <tr>
                            <th>Loan Term</th>
                            <td>{this.state.loans.loanTerm}</td>
                        </tr>
                        <tr>
                            <th>Loan Amount</th>
                            <td>{this.state.loans.loanAmount}</td>
                        </tr>
                        
                
                </table>
                </div>
                </div>
                </div>
        )

    }

}
