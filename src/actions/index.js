export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const UPDATE_SEARCH_KEY = "UPDATE_SEARCH_KEY";
export const TOTAL_QUERY_RESULT = "TOTAL_QUERY_RESULT";

export function addSearchResult(searchResult) {
    console.log('searchResult')
    return {
        type: ADD_SEARCH_RESULT,
        searchResultArr : searchResult
    };
}


export function updateSearchKey(word){    
    return {
        type: UPDATE_SEARCH_KEY,
        searchWord : word
    };
}


export function totalQueryResult(total){    
    return {
        type : TOTAL_QUERY_RESULT,
        totalResult : total 
    }
}
