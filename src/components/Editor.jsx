import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";
import { FaRegSave } from "react-icons/fa";
// import Employee from "../data/employees.json"

const QueryEditorTab = ({ tab, key, tabId, activeTabId }) => {
  const activeConnection = useSelector((state)=>state.queryEditor.activeConnection)
  const dispatch = useDispatch();
  const handleClickTab = (id) => {
    console.log("double fuck you")
    dispatch({
      type: "CHANGE_ACTIVE_TAB",
      payload: {
        tabId: id
      }
    })
  }
  const handleOnClose = (e) =>{
    e.stopPropagation();
    console.log("fucked", tab.id)
    dispatch({
      type: "REMOVE_TAB",
      payload:{
        tabID: tab.id,
      }
    })
  }
  return (
    <div onClick={()=>{handleClickTab(tab.id)}} key={key} className={"tab" + (tab.id == activeTabId? " active-tab": "")}>
      <i>{tab.name}</i>
      <RxCross2 onClick={(e)=>{handleOnClose(e)}} className='icon'/>
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

  return (
    <div className='editor'>
      <div className="tab-list">
        <div className="tabs">  
          {tabs.map((tab, index)=> {
            return (
              <QueryEditorTab 
                key={index} tab={tab} tabId={tab.id} activeTabId={activeTabId}
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