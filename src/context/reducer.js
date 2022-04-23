import * as actionTypes from './actionTypes';

export default (state, action) => {
    switch(action.type) {
        case actionTypes.SELECT_COUNTRY:
            return {
                ...state,
                selectedCountry: action.payload
            }
        case actionTypes.SET_CURRENT_COUNTRY:
            return {
                ...state,
                currentCountry: action.payload
            }
        case actionTypes.UPDATE_SORT_BY:
            return {
                ...state,
                countries: state.countries.sort(sortFn[action.payload])
            }
        case actionTypes.SET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case actionTypes.SET_FILTER_BY:
            return {
                ...state,
                filterBy: action.payload
            }
        default:
            return state;
    }
}

const sortFn = {
    'area': sortByArea,
    'population': sortByPopulation,
    'none': f => f
}

function sortByArea( a, b ) {
    if ( a.area > b.area ){
      return -1;
    }
    if ( a.area < b.area ){
      return 1;
    }
    return 0;
  }

  function sortByPopulation( a, b ) {
    if ( a.population > b.population ){
      return -1;
    }
    if ( a.population < b.population ){
      return 1;
    }
    return 0;
  }
