import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";
import { FaRegSave } from "react-icons/fa";

const QueryEditorTab = ({ tab, key, onClick }) => {
  return (
    <div onClick={onClick} key={key} className='tab'>
      {tab.name}
      <RxCross2 className='icon' />
    </div>
  );
};

const Editor = () => {
  const activeConnection = useSelector((state)=>state.queryEditor.activeConnection)
  const tabs = useSelector((state)=> state.queryEditor.tabs[activeConnection])
  const activeTabId = useSelector((state)=> state.queryEditor.activeTab)
  const activeTab = tabs.filter(item => item.id == activeTabId)[0]
  console.log(activeTab)
  const dispatch = useDispatch();

  const handleAddTab = () => {
    dispatch({
      type: "ADD_TAB",
      payload: {
        activeConnection: activeConnection
      }
    })
  }

  const handleRunQuery = () => {
    dispatch({
      type: "RUN_QUERY",
      payload: {
        tabData: activeTab,
        activeConnection: activeConnection
      }
    })
  }

  const handleSaveQuery = () => {
    
  }

  const handleChangeEditorValue = (e) => {
    dispatch({
      type: "CHANGE_EDITOR_QUERY",
      payload: {
        tabData: activeTab,
        activeConnection: activeConnection,
        editorValue: e.target.value
      }
    })
  }

  const handleClickTab = (id) => {
    console.log(tabs);
    // setActiveTab(tabs.filter((item, index)=> { return item.id===id })[0])
    dispatch({
      type: "CHANGE_ACTIVE_TAB",
      payload: {
        tabId: id
      }
    })
  }

  return (
    <div className='editor'>
      <div className="tab-list">
        <div className="tabs">  
          {tabs.map((tab, index)=> {
            return (
              <QueryEditorTab onClick={()=> {handleClickTab(tab.id)}} key={index} tab={tab} />
            )
          })}
        </div>
        <div className="control-buttons">
          <FaPlus className='icon' onClick={handleAddTab} />
          <GoTriangleRight size={20} color="green" className='icon' onClick={handleRunQuery} />
          <FaRegSave className='icon' onClick={handleSaveQuery} />
        </div>
      </div>
        <textarea value={activeTab.query} onChange={(e)=>{ handleChangeEditorValue(e) }}>
          
        </textarea>
    </div>
  )
}

export default Editor