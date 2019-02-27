import React from "react";
import ItemDetails from './ItemDetails';
import PricingDetail from "./PricingDetail";
import Title from "./Title";

const PurchaseSummary = ({ item }) => {
  const { itemDetails, pricing } = item;
  console.log(item)

  return (
    <div className="page-container">
      <div className="purchase-summary-container">
        <Title>Purchase Summary</Title>
        <PricingDetail pricing={pricing} />
        <ItemDetails item={itemDetails} />
      </div>
    </div>
  );
};

export default PurchaseSummary;
