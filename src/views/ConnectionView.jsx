import React from 'react'
import Connection from '../components/Connection'
import Button from '../components/Button'
import { IoAdd } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const ConnectionInfo = ({data}) =>{
    return (
        data.map((connection) =>{
            console.log(connection);
            return(
                <Connection details={connection.details} name={connection.name}/>
            )
        })
    )
}


const ConnectionView = () => {
    //notes for Aman
    //use activeconnection to filter the connection that is active
    // I have mapped all the connections here
    const data = useSelector((state) =>state.connections.allConnections)
    console.log('data',data);
  return (
    <div className='connnection-view'>
        <Button icon={<IoAdd color='#2026D2' size={40}/>} />
        <ConnectionInfo data={data}/>
    </div>
  )
}

export default ConnectionView