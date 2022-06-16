import React from 'react'
import '../styles/buttonClear.css'

function ButtonClear({children, onclick}) {
  return (
    <div className='button-clear' onClick={onclick}>{children}</div>
  )
}

export default ButtonClear