import React from 'react'
import { IoAdd } from "react-icons/io5";

const Button = ({icon, text}) => {
  return (
    <div>
        <button className='button' title='Add Connection'>
            {icon}
        </button>
        <p>{text}</p>
    </div>
  )
}

export default Button