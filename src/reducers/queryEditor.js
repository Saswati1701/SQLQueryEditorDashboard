const initialState = {
    "Connection1": [
        {
            id: 1,
            name: "tab1",
            query: `

            `,
            response:[]
        },
    ]
}

const queryEditorReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
        return state;
    }
  };

export default queryEditorReducer