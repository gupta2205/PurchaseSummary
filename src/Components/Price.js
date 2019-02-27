import React from "react";

const Price = ({ children, negative, className = "" }) => (
  <span
    className={`detail-price${negative ? " color-red" : ""} ${className}`}
  >{`${negative ? "-" : ""}$${children}`}</span>
);

export default Price;
