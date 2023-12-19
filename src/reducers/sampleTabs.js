const initialState = {
    tabs:[{
        name:"tab1",
        query: "some query1",
        run: false,
        response: "Some response 1"
    },
    //remove this tab2 after testing out the first time
    {
        name:"tab2",
        query: "some query2",
        run: false,
        response: "Some response 2"
    }],
    activeTab: "tab1"

}

const sampleTabsReducer = (state = initialState, action)=>{
    switch(action.type){
        case "CHANGE_TAB":
        return{
            ...state,
            activeTab: action.payload.name
        }
        default: return state;
    }
}

export default sampleTabsReducer