import { combineReducers } from 'redux';
import connectionsReducer from './connections';
import queryEditorReducer from './queryEditor';

const rootReducer = combineReducers({
    connections: connectionsReducer,
    queryEditor: queryEditorReducer
})

export default rootReducer