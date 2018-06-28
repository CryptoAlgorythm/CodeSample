/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_SEARCH = 'SearchPage/CHANGE_SEARCH';
export const SHOE_SEARCH_PAGE_CHANGE = 'SearchPage/SHOE_SEARCH_PAGE_CHANGE';
export const SHOE_SEARCH_SUCCESS = 'SearchPage/SHOE_SEARCH_SUCCESS';
export const SHOE_SEARCH_FAILED = 'SearchPage/SHOE_SEARCH_FAILED';
export const SEARCH_FETCH_REQUESTED = 'SearchPage/CHANGE_SEARCH';
