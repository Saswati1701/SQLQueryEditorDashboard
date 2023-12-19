import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SampleTabs = () => {
    const data = useSelector((state) => state.tabsList);
    const dispatch = useDispatch();

    const handleTabChange = (name) => {
        dispatch({
            type: "CHANGE_TAB",
            payload:name
        })
        console.log("name:", name)
        console.log(data);
    }
  return ( 
    <div className='sample-tabs'>
        {
            data.tabs.map(tab=>{
                return(
                    //change key to make it deletable
                    <div className='sample-tab' key={tab.name}>
                        <div onClick={()=>{handleTabChange(tab.name)}}>{tab.name}</div>
                        <div>
                        {/* identify active tab by key not name */}
                            {data.activeTab === tab.name && <textarea placeholder={tab.query}></textarea>}
                        </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default SampleTabs