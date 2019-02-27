import * as PropTypes from "prop-types";
import React, { Component } from "react";
import ItemDetails from "./ItemDetails";
import PricingDetail from "./PricingDetail";
import PromotionCode from "./PromotionCode";
import Separator from './Separator';
import Title from "./Title";

class PurchaseSummary extends Component {
  render() {
    let { item, onApplyPromotionCode } = this.props;
    const { pricing } = item;

    return (
      <div className="page-container">
        <div className="purchase-summary-container">
          <Title>Purchase Summary</Title>
          <PricingDetail pricing={pricing} />
          <ItemDetails item={item} />
          <Separator />
          <PromotionCode onApply={onApplyPromotionCode} />
        </div>
      </div>
    );
  }
}

PurchaseSummary.propTypes = { item: PropTypes.any };

export default PurchaseSummary;
