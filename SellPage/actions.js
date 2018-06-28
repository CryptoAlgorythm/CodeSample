/*
 *
 * SellPage actions
 *
 */

import {
  CHANGE_SEARCH,
  SEARCH_FETCH_REQUESTED,
  SHOE_SEARCH_FAILED,
  SHOE_SEARCH_PAGE_CHANGE,
  SHOE_SEARCH_SUCCESS
} from "./constants";

import { ADD_MULTIPLE_PRODUCTS } from "constants/products";


export function addProducts(products) {
  return {
    type: ADD_MULTIPLE_PRODUCTS,
    payload: { products },
  }
}
export function changeSearch(searchValue) {
  return {
    type: CHANGE_SEARCH,
    searchValue
  };
}

export function searchLoaded(response) {
  return {
    type: SHOE_SEARCH_SUCCESS,
    response
  }
}

export function searchLoadingError(error) {
  return {
    type: SHOE_SEARCH_FAILED,
    error
  }
}

export function fetchSearch() {
  return {
    type: SEARCH_FETCH_REQUESTED
  }
}

export function pageChange(page) {
  return {
    type: SHOE_SEARCH_PAGE_CHANGE,
    page
  }
}
