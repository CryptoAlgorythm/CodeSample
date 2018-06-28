import { createSelector } from "reselect";

/**
 * Direct selector to the sellPage state domain
 */
const selectSellPage = () => (state) => state.get('sellPage');


const makeSelectSearchValue = () => createSelector(
  selectSellPage,
  (homeState) => homeState.get('searchValue')
);

/**
 * Default selector used by SellPage
 */
const makeSelectSellPage = () => createSelector(
  selectSellPage(),
  (substate) => substate.toJS()
);

export default makeSelectSellPage;
export {
  selectSellPage,
  makeSelectSearchValue,
  makeSelectSellPage,
};
