const initialState = {
    searchResultArr : [],
    searchWord : '',
    totalResult : 0,
    currentPage : 0,
    selectedCardNumber : 0,
    clickedCard : 0 //card on which the user clicks    
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

        case "UPDATE_CURRENT_CLICKED_CARD":            
            return Object.assign({}, state, {
                clickedCard : action.clickedCard
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