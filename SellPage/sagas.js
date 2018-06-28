import { requestGET } from "utils/request";
import makeSelectSellPage from "./selectors";
import { addProducts, searchLoaded, searchLoadingError } from "./actions";
import { CHANGE_SEARCH, SHOE_SEARCH_PAGE_CHANGE } from "./constants";
import { call, put, select, takeEvery } from "redux-saga/effects";


export function* getShoes() {
  const { searchValue, perPage, page } = yield select(makeSelectSellPage());
  const requestRoute = `public/search`;
  const params = {
    page: page,
    perPage: perPage,
    query: searchValue,
    'filter[type]': 'Shoe',
    'filter[deny_entry]': false,
  };
  try {
    const shoes = yield call(requestGET, requestRoute, params);
    yield put(searchLoaded(shoes, searchValue));
    yield put(addProducts(shoes.results));

  } catch (err) {
    yield put(searchLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* shoeData() {
  yield takeEvery(CHANGE_SEARCH, getShoes);
  yield takeEvery(SHOE_SEARCH_PAGE_CHANGE, getShoes);
}


// Bootstrap sagas
export default [
  shoeData,
];
