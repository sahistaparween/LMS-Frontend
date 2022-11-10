import React, { Component } from 'react'
//import './ListLoanComponents.css'

import LoanService from '../../services/LoanService'

class GetLoanById extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loans: []
        }
        console.log("from constructor");
        }
    

    componentDidMount() {
        LoanService.getLoanDetails().then((res) => {
            this.setState({ loans: res.data })
            console.log(this.state.loans);


        })
        console.log(this.state.loans);

    }
   
 

    render() {
        
        
        return (

            <div className='loanbyid'>
                <h1>Loan Details</h1>
                <div style={{margin:'50px'}}>
                    <div className='now' style={{ display: 'flex',flexWrap: 'wrap'}}>
                        {
                            this.state.loans.map(loan => {
                                return <loan key={loan.loanId} dif={loan.loanId} wholeDetail={loan} type={loan.loanType} term={loan.loanTerm} amount={loan.loanAmount}/>
                            })
                        }
                    </div>
                </div>
                
 
                </div>
        )

    }

}
export default GetLoanById;