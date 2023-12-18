import React from 'react'
import ConnectionView from './ConnectionView'
import DatabasesView from './DatabasesView'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <ConnectionView/>
        <DatabasesView/>
    </div>
  )
}

export default Dashboard