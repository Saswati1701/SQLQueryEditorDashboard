import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const SavedQueries = () => {
  const savedQueries = useSelector(state => state.connections.allConnections.filter((item)=>item.id==state.connections.activeConnection)[0].savedQueries)
  const dispatch = useDispatch()
  const handleClickSavedQuery = (item) => {
    dispatch({
      type: "ADD_TAB_FROM_SAVED_QUERY",
      payload: {
        tabData: item
      }
    })
  }
  return (
    <div className='saved-queries'>
      {savedQueries.map(item => {
        return (
          <div onClick={()=>{handleClickSavedQuery(item)}}>{item.name}</div>
        )
      })}
    </div>
  )
}

export default SavedQueries