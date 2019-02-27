import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItemData, getItem } from "../redux/ducks/item";
import PurchaseSummary from "./PucharseSummary";

class PurchaseSummaryContainer extends Component {
  componentDidMount() {
    this.props.fetchItemData();
  }

  render() {
    const { item } = this.props;

    console.log("item", item);

    return item ? <PurchaseSummary item={item} /> : null;
  }
}

const mapStateToProps = state => ({
  item: getItem(state)
});

export default connect(
  mapStateToProps,
  {
    fetchItemData
  }
)(PurchaseSummaryContainer);
