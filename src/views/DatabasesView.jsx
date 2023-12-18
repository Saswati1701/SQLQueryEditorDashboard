import React from 'react'
import Header from '../components/Header'
import SchemaQueryView from './SchemaQueryView'
import QueryEditorView from './QueryEditorView'

const DatabasesView = () => {
  return (
    <div className='databases-view'>
        <Header/>
        <div className='content-container'>
            <SchemaQueryView/>
            <QueryEditorView/>
        </div>
    </div>
  )
}

export default DatabasesView