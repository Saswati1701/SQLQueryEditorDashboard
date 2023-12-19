import React from 'react'
import Connection from '../components/Connection'
import Button from '../components/Button'
import { IoAdd } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const ConnectionInfo = ({data}) =>{
    const activeConnection = useSelector((state) =>state.queryEditor.activeConnection)
    return (
        data.map((connection) =>{
            console.log(connection);
            return(
                <Connection activeConnection={activeConnection} details={connection.details} name={connection.name} id={connection.id} />
            )
        })
    )
}


const ConnectionView = () => {
    const data = useSelector((state) =>state.connections.allConnections)
  return (
    <div className='connnection-view'>
        <Button icon={<IoAdd color='#2026D2' size={40}/>} />
        <ConnectionInfo data={data}/>
    </div>
  )
}

export default ConnectionView