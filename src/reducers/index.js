const initialState = {
    searchResultArr : []
};


function appReducer(state, action){
    switch(action.type){
        case "ADD_SEARCH_RESULT": 
        return Object.assign({},state, {
            searchResultArr : []
        });

    default:
        return state;
    }

}


export default function(state=initialState, action){
    return {
        ...appReducer(state, action)
    };
}