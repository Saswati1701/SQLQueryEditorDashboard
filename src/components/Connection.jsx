import React from 'react'
import { useSelector } from 'react-redux'

const StyledText = ({title, description}) =>{
    return(
        <div className='styled-text'>
            <span
                style={{
                    color:"#757597"
                }}
            >{title}
            </span>:
            <span
                style={{
                    color: "black",
                    fontWeight: "500"
                }}
            >{description}</span>
        </div>
    )
}

const Connection = ({details}) => {
    console.log("hello:", details)
  return (
    <div className='connection'>
        <StyledText title="Host" description={details.hostName}/>
        <StyledText title="Port" description={details.port}/>
        <StyledText title="User" description={details.userName}/>

    </div>
  )
}

export default Connection