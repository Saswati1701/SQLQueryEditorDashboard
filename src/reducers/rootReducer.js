import { combineReducers } from 'redux';
import connectionsReducer from './connections';
import queryEditorReducer from './queryEditor';
import sampleTabsReducer from './sampleTabs';

const rootReducer = combineReducers({
    connections: connectionsReducer,
    queryEditor: queryEditorReducer
})
// const rootReducer = combineReducers({
//     tabsList: sampleTabsReducer
// })

export default rootReducer