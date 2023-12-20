import React from 'react'
import { useSelector } from 'react-redux'
import Editor from '../components/Editor'
import Response from '../components/Response'

const QueryEditorView = () => {
  const boolRenderResponse = useSelector((state)=> state.queryEditor.tabs[state.queryEditor.activeConnection].filter(item=> item.id == state.queryEditor.activeTab)[0]?.response) === "yes"
  return (
    <div className='query-editor-view'>
        <Editor/>
        { boolRenderResponse && <Response/>}
    </div>
  )
}

export default QueryEditorView