import React from 'react'
import './button.css'
function button({symbol,color,handleClick}) {
  return (
    
    <div className='button-wrapper' style={{backgroundColor:color}} onClick={()=>handleClick(symbol)}>
        {symbol}
    </div>
  )
}

export default button
