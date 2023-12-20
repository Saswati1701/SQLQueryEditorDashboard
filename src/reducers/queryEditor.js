import { v4 as uuidv4 } from 'uuid';
// import employeeData from '../data/employees.json';
const initialState = {
    tabs: {
        "1": [
            {
                id: 1,
                name: "tab1",
                query: `SELECT * from database1.products;`,
                response: "no" // yes or no for now later will store the response from api call
            },
        ]
    },
    activeConnection: 1,
    activeTab: "1"
}

const queryEditorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TAB":
        return {
            ...state,
            tabs: {
                ...state.tabs,
                [action.payload.activeConnection] : [
                    ...state.tabs[action.payload.activeConnection],
                    {
                        id: uuidv4(),
                        name: `tab${state.tabs[action.payload.activeConnection].length+1}`,
                        query: `--Enter your queries here\nSELECT * from ;`,
                        response: "no",
                    },
                ]
            }
        };

        case "ADD_TAB_FROM_SAVED_QUERY":
            // check for is that tab already exists in tabs
            if(state.tabs[state.activeConnection].some(tab => tab.id == action.payload.tabData.id)) {
                return {
                    ...state,
                    activeTab: action.payload.tabData.id
                }
            } else {
                return {
                    ...state,
                    tabs: {
                        ...state.tabs,
                        [state.activeConnection]: [
                            ...state.tabs[state.activeConnection],
                            {
                                ...action.payload.tabData
                            }
                        ]
                    },
                    activeTab: action.payload.tabData.id
                }

            }

        case "CHANGE_EDITOR_QUERY":
        return {
            ...state,
            tabs: {
                ...state.tabs,
                [action.payload.activeConnection] : [
                    ...state.tabs[action.payload.activeConnection].map((item, index)=>{
                        if (item.id === action.payload.tabData.id) {
                            return {
                                ...item,
                                query: action.payload.editorValue
                            }
                        } else {
                            return  item
                        }
                    })
    
                ]
            }
        }

        case "CHANGE_ACTIVE_TAB":
            return {
                ...state,
                activeTab: action.payload.tabId
            }

        case "RUN_QUERY":
            return {
                ...state,
                tabs: {
                    ...state.tabs,
                    [action.payload.activeConnection] : [
                        ...state.tabs[action.payload.activeConnection].map((item, index)=>{
                            if(item.id === action.payload.tabData.id)  {
                                return {
                                    ...item,
                                    response: 'yes'
                                }
                            } else {
                                return item
                            }
                        })
                    ]
                }
            }

        case "REMOVE_TAB":
            let newActiveTab = state.activeTab;
            if(action.payload.tabID === state.activeTab) {
                if(state.tabs[state.activeConnection].length > 0) {
                    newActiveTab = state.tabs[state.activeConnection][0].id
                } else {
                    newActiveTab = ""
                }
            }
            return {
                ...state,
                tabs: {
                    ...state.tabs,
                    [state.activeConnection]: state.tabs[state.activeConnection].filter(item=>{
                        return item.id != action.payload.tabID
                    })
                },
                activeTab: newActiveTab
            }

        case "CHANGE_ACTIVE_CONNECTION":
            if (!(action.payload.connectionId in state.tabs)) {
                return {
                    ...state,
                    tabs: {
                        ...state.tabs,
                        [action.payload.connectionId]: [
                            {
                                id: 1,
                                name: "tab1",
                                query: `SELECT * from database1.products;`,
                                response: "no"
                            },
                        ]
                    },
                    activeConnection: action.payload.connectionId,
                    activeTab: 1
                };
            }
        
            return {
                ...state,
                activeConnection: action.payload.connectionId,
                activeTab: state.tabs[state.activeConnection][0].id
            };

        default:
        return state;
    }
  };

export default queryEditorReducer