import React from "react";
import PropTypes from "prop-types";
import Collapsible from './Collapsible';

const ItemDetails = ({ item }) => {
  const header = (
      <p className="underlined-text">See items details</p>
  );

  return <Collapsible header={header}>
    <div className="item-details-container">
      <div className="item-image-container">
        <img src={item.image} alt="" width="50%"/>
      </div>
      <p>{item.item_name}</p>
    </div>
  </Collapsible>;
};

export default ItemDetails;
