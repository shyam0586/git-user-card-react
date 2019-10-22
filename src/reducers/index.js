const initialState = {
    searchResultArr : [],
    searchWord : '',
    totalResult : 0,
    currentPage : 0,
    selectedCardNumber : 0    
};


function appReducer(state, action){
    switch(action.type){
        case "ADD_SEARCH_RESULT":   
        console.log(action.searchResultArr)      
            return Object.assign({},state, {
                searchResultArr : action.searchResultArr
            });
    
        case "UPDATE_SEARCH_KEY":            
            return Object.assign({},state, {
                searchWord : action.searchWord
            });
        
        case "TOTAL_QUERY_RESULT":            
            return Object.assign({}, state, {
                totalResult : action.totalResult
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