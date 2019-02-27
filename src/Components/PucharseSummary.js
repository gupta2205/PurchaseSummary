import React from "react";
import PricingDetail from "./PricingDetail";
import Title from "./Title";

const PurchaseSummary = ({ item }) => {
  const { itemDetails, pricing } = item;

  return (
    <div className="page-container">
      <div className="purchase-summary-container">
        <Title>Purchase Summary</Title>
        <PricingDetail pricing={pricing} />
      </div>
    </div>
  );
};

export default PurchaseSummary;
