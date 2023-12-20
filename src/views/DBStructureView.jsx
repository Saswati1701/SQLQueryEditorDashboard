import React from 'react'
import DBStructure from '../components/DBStructure'
import Queries from '../components/SavedQueries'
import { useState } from 'react'

const DBStructureView = () => {
    const [expandSchema, setExpandSchema] = useState(true);
    const [expandQueries, setExpandQueries] = useState(false);
  return (
    <div className='schema-query-view'>
        <div className='schema-query-button'>
            <button
                className={expandSchema? "active":"" }
                onClick={()=>{
                    setExpandSchema(true);
                    setExpandQueries(false);
                }}
            >
                DB Structure
            </button>
            <button
                className={expandQueries? "active":"" }
                onClick={()=>{
                    setExpandSchema(false);
                    setExpandQueries(true);
                }}
            >
                Saved Query
            </button>
        </div>
        <div>
            {expandSchema && <DBStructure/>}
            {expandQueries && <Queries/>}
        </div>
        
    </div>
  )
}

export default DBStructureView