import React from "react";
import Collapsible, { CollapsibleHeader } from "./Collapsible";
import Price from "./Price";

const ItemDetails = ({ item }) => {
  const { itemDetails, pricing } = item;

  const headers = {
    openHeader: <CollapsibleHeader>Hide items details</CollapsibleHeader>,
    closedHeader: <CollapsibleHeader>Show items details</CollapsibleHeader>
  };

  return (
    <Collapsible {...headers}>
      <div className="item-details-container">
        <div className="item-image-container">
          <img src={itemDetails.image} alt="" />
        </div>
        <div>
          <p>{itemDetails.item_name}</p>
          <p>{itemDetails.item_name}</p>
          <p className="item-price-quality">
            <Price>{pricing.subtotal - pricing.savings}</Price>
            <span>Qty: {itemDetails.quantity}</span>
          </p>
          <p>
            <Price className="old-price">{pricing.subtotal}</Price>
          </p>
        </div>
      </div>
    </Collapsible>
  );
};

export default ItemDetails;
