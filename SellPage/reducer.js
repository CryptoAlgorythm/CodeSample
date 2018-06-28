/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from "immutable";

import { CHANGE_SEARCH, SHOE_SEARCH_FAILED, SHOE_SEARCH_PAGE_CHANGE, SHOE_SEARCH_SUCCESS } from "./constants";

// The initial state of the App
const initialState = fromJS({
  searchValue: '',
  shoes: [],
  page: 1,
  perPage: 10,
  sort: 'created_at',
  totalCount: 0,
  totalPages: 0,
  loading: false,
  error: false,
});

function sellPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH:
      return state
        .set('searchValue', action.searchValue)
        .set('page', 1)
        .set('loading', true);
    case SHOE_SEARCH_SUCCESS:
      return state
        .set('shoes', action.response.results)
        .set('totalPages', action.response.totalPages)
        .set('totalCount', action.response.totalCount)
        .set('loading', false);
    case SHOE_SEARCH_FAILED:
      return state
        .set('error', action.error)
        .set('loading', false);
    case SHOE_SEARCH_PAGE_CHANGE:
      return state
        .set('page', action.page);
    default:
      return state;
  }
}

export default sellPageReducer;
