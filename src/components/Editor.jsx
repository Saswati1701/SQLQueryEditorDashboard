import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";
import { FaRegSave } from "react-icons/fa";

const QueryEditorTab = ({ tab, key }) => {
  return (
    <div key={key} className='tab'>
      {tab.name}
      <RxCross2 className='icon' />
    </div>
  );
};

const Editor = () => {
  const activeConnection = useSelector((state)=>state.connections.activeConnection)
  const tabs = useSelector((state)=> state.queryEditor[activeConnection])
  const [activeTab, setActiveTab] = useState(tabs[0])
  const dispatch = useDispatch();

  const handleAddTab = () => {
    const name = window.prompt('Enter tab name:');
    dispatch({
      type: "ADD_TAB",
      payload: {
        name: name,
        activeConnection: activeConnection
      }
    })
  }

  const handleRunQuery = () => {
    
  }

  const handleSaveQuery = () => {
    
  }

  return (
    <div className='editor'>
      <div className="tab-list">
        <div className="tabs">  
          {tabs.map((tab, index)=> {
            return (
              <QueryEditorTab key={index} tab={tab} />
            )
          })}
        </div>
        <div className="control-buttons">
          <FaPlus className='icon' onClick={handleAddTab} />
          <GoTriangleRight size={20} color="green" className='icon' onClick={handleRunQuery} />
          <FaRegSave className='icon' onClick={handleSaveQuery} />
        </div>
      </div>
        <textarea value={activeTab.query} style={{ width: '95%', height: '80%', resize: 'none' }}>
          
        </textarea>
    </div>
  )
}

export default Editor