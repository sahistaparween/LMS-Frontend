
import React, { useState } from 'react'
import InputRange from '../InputRange';

const LoanCalculator = () => {
    const [valueAmount, setValueAmount] = useState(300);
    const [valueTerm, setValueTerm] = useState(3);
    const [valuePercentage, setValuePercentage] = useState(12);
    const [totalAmount, setTotalAmount] = useState(12);

    const data = {
        'credit_amount': setValueAmount,
        'credit_term': setValueTerm,
        'credit_percentage': setValuePercentage
    }
    const handleValue = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        data[name](value);
        if(name==='credit_amount'){
            handleTotalAmount(value, valueTerm, valuePercentage)
        }
        else if(name==='credit_term'){
            handleTotalAmount(valueAmount, value, valuePercentage)
        }
        else{
            handleTotalAmount(valueAmount, valueTerm, value)
        }
    }
    // console.log(((300 * 12 / 100) + 300) / 3);
    console.log(valueAmount);
    console.log(valueTerm);
    console.log(valuePercentage);
    const handleTotalAmount = (amount, term, percentage) =>{
        const value = (((amount * (percentage / 100)).toFixed(2)  + amount) / term ).toFixed(2)
        console.log(value);
        setTotalAmount(value)
    }

    return (
        <div>
            <h2>Credit</h2>
            <div>
                <form>
                    <div className='w-3/5'>
                        
                        <h3>{valueAmount}</h3>
                        <InputRange
                            value={valueAmount}
                            handleValue={handleValue}
                            min='300'
                            max='30000'
                            name="credit_amount"
                        />
                        {/* <input type="range" name="credit_amount" id="credit_amount" className='w-1/4' onChange={handleValue} min="0" max="3000"/> */}
                    </div>
                    <div className='flex w-3/5'>
                        <div className='w-1/2'>
                            
                            <h3>{valueTerm}</h3>
                            <InputRange
                                className='w-1/2'
                                value={valueTerm}
                                handleValue={handleValue}
                                min='3'
                                max='48'
                                name="credit_term"
                            />
                        </div>
                        <div className='w-1/2'>
                            
                            <h3>{valuePercentage}</h3>
                            <InputRange
                                value={valuePercentage}
                                handleValue={handleValue}
                                min='12'
                                max='18'
                                name="credit_percentage"
                            />
                        </div>
                    </div>
                    <div className="flex">
                        
                        <h3>{totalAmount}</h3>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoanCalculator