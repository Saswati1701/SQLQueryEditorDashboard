import { v4 as uuidv4 } from 'uuid';
import employeeData from '../data/employees.json';
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

        default:
        return state;
    }
  };

export default queryEditorReducer