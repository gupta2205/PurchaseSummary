import React from "react";
import Title from "./Title";

const PurchaseSummary = ({ item }) => {
  const { itemDetails, pricing } = item;

  return (
    <div className="page-container">
      <div className="purchase-summary-container">
        <Title>Purchase Summary</Title>
        <p>Subtotal: {pricing.subtotal}</p>
        <p>Pickup savings: {pricing.savings}</p>
        <p>Est taxes and fees: {pricing.tax}</p>
        <p>Est total: {pricing.total}</p>
      </div>
    </div>
  );
};

export default PurchaseSummary;
