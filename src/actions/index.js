export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const UPDATE_SEARCH_KEY = 'UPDATE_SEARCH_KEY';
export const TOTAL_QUERY_RESULT = 'TOTAL_QUERY_RESULT';
export const UPDATE_CURRENT_CLICKED_CARD = 'UPDATE_CURRENT_CLICKED_CARD';
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';

export function addSearchResult(searchResult) {
  return {
    type: ADD_SEARCH_RESULT,
    searchResultArr: searchResult,
  };
}


export function updateCurrentResultPage(currPage) {
  return {
    type: CHANGE_CURRENT_PAGE,
    currentPage: currPage,
  };
}


export function updateSearchKey(word) {
  return {
    type: UPDATE_SEARCH_KEY,
    searchWord: word,
  };
}


export function totalQueryResult(total) {
  return {
    type: TOTAL_QUERY_RESULT,
    totalResult: total,
  };
}


export function updateCurrentClickCard(index) {
  return {
    type: UPDATE_CURRENT_CLICKED_CARD,
    clickedCard: index,
  };
}
