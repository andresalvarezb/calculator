import React from 'react'
import '../styles/button.css'

function Button({ children, onclick }) {
  const isOperator = (value) => {
    return isNaN(value) && (value !== '.') && (value !== '=')
  }

  if (isOperator(children)) {
    return (
      <button
        className='button-container operator'
        onClick={() => onclick(children)}>
        {children}
      </button>
    )

  } else {
    return (
      <button
        className='button-container'
        onClick={() => onclick(children)}>
        {children}
      </button>
    )

  }
}

export default Button