import React, { Component } from "react";
import { connect } from "react-redux";
import {applyPromoCode, fetchItemData, getItem} from '../redux/ducks/item';
import PurchaseSummary from "./PucharseSummary";

class PurchaseSummaryContainer extends Component {
  componentDidMount() {
    this.props.fetchItemData();
  }

  render() {
    const { applyPromoCode, item } = this.props;

    return item ? (
      <PurchaseSummary
        item={item}
        onApplyPromotionCode={applyPromoCode}
      />
    ) : null;
  }
}

const mapStateToProps = state => ({
  item: getItem(state)
});

export default connect(
  mapStateToProps,
  {
    fetchItemData,
    applyPromoCode,
  }
)(PurchaseSummaryContainer);
