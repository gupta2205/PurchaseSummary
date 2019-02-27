import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItemData, getItem } from "../redux/ducks/item";
import PurchaseSummary from "./PucharseSummary";

class PurchaseSummaryContainer extends Component {
  state = {
    item: null
  };

  promotionCodes = {
    DISCOUNT: 0.1
  };

  componentDidMount() {
    this.props.fetchItemData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevProps.item && this.props.item) {
      this.setState({item: this.props.item})
    }
  }

  applyPromotionCode = code => {
    return this.setState(({item}) => ({
      item: {
        ...item,
        pricing: {
          ...item.pricing,
          total: this.promotionCodes[code]
              ? (1 - this.promotionCodes[code]) * this.props.item.pricing.total
              : this.props.item.pricing.total
        }
      }
    }));
  };

  render() {
    const { item } = this.state;

    return item ? (
      <PurchaseSummary
        item={item}
        onApplyPromotionCode={this.applyPromotionCode}
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
    fetchItemData
  }
)(PurchaseSummaryContainer);
