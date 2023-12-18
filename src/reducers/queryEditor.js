const initialState = {
    "1": [
        {
            id: 1,
            name: "tab1",
            query: `SELECT * from database1.products;`,
            response:[]
        },
    ]
}

const queryEditorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TAB":
        return {
            ...state,
            [action.payload.activeConnection]: [
            ...state[action.payload.activeConnection],
            {
                id: 12,
                name: action.payload.name,
                query: `
                    SELECT * from ;
                `,
                response: [],
            },
            ],
        };

        default:
        return state;
    }
  };

export default queryEditorReducer