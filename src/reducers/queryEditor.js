import { v4 as uuidv4 } from 'uuid';
// import employeeData from '../data/employees.json';
const initialState = {
    tabs: {
        "1": [
            {
                id: 1,
                name: "tab1",
                query: `SELECT * from database1.products;`,
                responsePath:[]
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
                        response: [],
                    },
                ]
            }
        };

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
                                    responsePath: 'employeeData'
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
                                responsePath:[]
                            },
                        ]
                    },
                    activeConnection: action.payload.connectionId
                };
            }
        
            return {
                ...state,
                activeConnection: action.payload.connectionId
            };

        default:
        return state;
    }
  };

export default queryEditorReducer