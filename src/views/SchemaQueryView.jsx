import React from 'react'
import SchemaTree from '../components/SchemaTree'
import Queries from '../components/Queries'
import { useState } from 'react'

const SchemaQueryView = () => {
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
                Schema Tree
            </button>
            <button
                className={expandQueries? "active":"" }
                onClick={()=>{
                    setExpandSchema(false);
                    setExpandQueries(true);
                }}
            >
                Queries
            </button>
        </div>
        <div>
            {expandSchema && <SchemaTree/>}
            {expandQueries && <Queries/>}
        </div>
        
    </div>
  )
}

export default SchemaQueryView