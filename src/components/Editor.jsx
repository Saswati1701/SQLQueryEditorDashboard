import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";
import { FaRegSave } from "react-icons/fa";
// import Employee from "../data/employees.json"

const QueryEditorTab = ({ tab, key, onClick, tabId, activeTabId }) => {
  return (
    <div onClick={onClick} key={key} className={"tab" + (tabId == activeTabId? " active-tab": "")}>
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
            console.log("activeTab:",activeTabId)
            console.log("tabId:",tab.id)
            return (
              <QueryEditorTab 
                onClick={()=> {handleClickTab(tab.id)}} key={index} tab={tab} tabId={tab.id} activeTabId={activeTabId}
              />
            )
          })}
        </div>
        <div className="control-buttons">
          <FaPlus className='icon' size={20} title='Add tab' onClick={handleAddTab} />
          <GoTriangleRight className='icon' size={30} title='Run' onClick={handleRunQuery} />
          <FaRegSave className='icon' size={20} title='Save Query' onClick={handleSaveQuery} />
        </div>
      </div>
        <textarea value={activeTab.query} onChange={(e)=>{ handleChangeEditorValue(e) }}>
          
        </textarea>
    </div>
  )
}

export default Editor