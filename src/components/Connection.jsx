import React from 'react'
import { useDispatch } from 'react-redux'

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

const Connection = ({activeConnection,details, name, id}) => {
    const dispatch = useDispatch();
    console.log('sss', id);
    const handleConnectionClick= (id) => {
        dispatch({
            type: "CHANGE_ACTIVE_CONNECTION",
            payload: {
                connectionId: id
            }
        })
        dispatch({
            type: "CHANGE_ACTIVE_CONNECTION_2",
            payload: {
                connectionId: id
            }
        })
    }
  return (
    <div className={'connection '+(activeConnection===id && "active" )} onClick={()=>handleConnectionClick(id)}>
        <h3>{name}</h3>
        <div>
            <StyledText title="Host" description={details.hostName}/>
            <StyledText title="Port" description={details.port}/>
            <StyledText title="User" description={details.userName}/>
        </div>
    </div>
  )
}

export default Connection