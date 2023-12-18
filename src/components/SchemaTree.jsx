import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from './ListItem';

const SchemaTree = () => {
    const allConnections = useSelector((state)=>state.connections.allConnections);
    const selectedConnectionId = useSelector((state)=>state.connections.activeConnection);
    const currentConnection = allConnections.filter((connection) => {
        return connection.id === selectedConnectionId
    })[0]

    console.log(currentConnection);
    // function recu
   
    return (
        <div>
            <ListItem obj={currentConnection.array} marginLeft={0} />
        </div>
    )
}

export default SchemaTree