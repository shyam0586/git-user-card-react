const initialState = {
  searchResultArr: [],
  currentPage: 1,
  totalPages: 0,
  pageNeighbours: 1,
  perPageResult: 12,
  searchWord: '',
  totalResult: null,
  selectedCardNumber: 0,
  clickedCard: 0, // card on which the user clicks
};


function appReducer(state, action) {
  switch (action.type){
    case 'ADD_SEARCH_RESULT':
      return { ...state, searchResultArr: action.searchResultArr };

    case 'CHANGE_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage };

    case 'UPDATE_SEARCH_KEY':
      return { ...state, searchWord: action.searchWord };

    case 'TOTAL_QUERY_RESULT':
      return { ...state, totalResult: action.totalResult };

    case 'UPDATE_CURRENT_CLICKED_CARD':
      return { ...state, clickedCard: action.clickedCard };

    default:
      return state;
  }
}


export default function (state = initialState, action) {
  return {
    ...appReducer(state, action),
  };
}
