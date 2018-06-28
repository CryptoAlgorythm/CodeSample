/*
 *
 * SellPage
 *
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { createStructuredSelector } from "reselect";
import makeSelectSellPage from "./selectors";
import SearchBar from "components/SearchBar";
import ShoeList from "components/ShoeList";
import Pagination from "components/Pagination";
import Container from "components/Container";
import SubmissionSubmitBubble from "containers/SubmissionSubmitBubble";
import { makeSelectAuthenticated } from "selectors/user";
import { changeSearch, pageChange } from "./actions";
import { openDialog } from "containers/ModalDialog";
import _ from "lodash";

export class SellPage extends Component { // eslint-disable-line react/prefer-stateless-function
  onShoeClick = (shoe) => {
    const { isAuthenticated, opensigninDialog } = this.props;
    if (!isAuthenticated) {
      return opensigninDialog();
    }
    return this.props.router.push(`/products/${shoe.id}`);
  };

  render() {
    const debouncecd = _.debounce(this.props.onChangeSearch, 350);
    const onSearchChangeHandler = event => debouncecd(event.target.value);
    const { shoes, totalPages, error, loading } = this.props.SellPage;
    const noResults = !loading && this.props.SellPage.searchValue.length > 0 && shoes.length === 0;

    return (
      <Container>
        <SearchBar
          defaultValue={this.props.SellPage.searchValue}
          onChange={onSearchChangeHandler}
          placeholder="Search for shoes to sell"
        />
        <ShoeList
          searchValue={this.props.SellPage.searchValue}
          error={error}
          shoes={shoes}
          loading={loading}
          onClick={this.onShoeClick}
          noResults={noResults}
        />
        <Pagination pageCount={totalPages}
                    onPageChange={this.props.onPageChange}
                    hide={shoes.length == 0 || loading || totalPages == 1}
        />
        <SubmissionSubmitBubble/>
      </Container>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  SellPage: makeSelectSellPage(),
  isAuthenticated: makeSelectAuthenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeSearch: (searchValue) => {
      dispatch(changeSearch(searchValue));
    },
    onPageChange: (page) => {
      dispatch(pageChange(page));
      window.scrollTo(0, 0);
    },
    opensigninDialog: (dialog) => dispatch(openDialog('registerOrSignInDialog'))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SellPage);
