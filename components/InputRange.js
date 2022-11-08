import React from 'react'

const InputRange = ({handleValue, min, max, name, value}) => {
  return (
        <input type="range" name={name} step='1' className='w-3/5' onChange={handleValue} min={min} max={max} value={value}/>
  )
}

export default InputRange