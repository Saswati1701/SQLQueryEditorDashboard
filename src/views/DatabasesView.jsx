import React from 'react'
import Header from '../components/Header'
import DBStructureView from './DBStructureView'
import QueryEditorView from './QueryEditorView'

const DatabasesView = () => {
  return (
    <div className='databases-view'>
        <Header/>
        <div className='content-container'>
            <DBStructureView/>
            <QueryEditorView/>
        </div>
    </div>
  )
}

export default DatabasesView