import React from "react";
import Tooltip from "./Tooltip";

const TotalPriceItem = ({ children }) => (
  <p className="total-price">{children}</p>
);
const Price = ({ children, negative }) => (
  <span className={`detail-price${negative ? ' color-red' : ''}`}>{`${negative ? '-' : ''}$${children}`}</span>
);

const DetailItem = props => {
  let { name, price } = props;

  return (
    <p className="detail-item">
      <span>{`${name}: `}</span>
      <Price>{price}</Price>
    </p>
  );
};

const PickupSavingsItem = ({ tooltip, price }) => (
  <p className="detail-item">
    <Tooltip position={"bottom"} message={tooltip}>
      Pickup savings
    </Tooltip>
    <Price negative>{price}</Price>
  </p>
);

const PricingDetail = ({ pricing }) => {
  return (
    <div>
      <DetailItem name="Subtotal" price={pricing.subtotal} />
      <PickupSavingsItem
        price={pricing.savings}
        tooltip={
          "Picking up your order in the store helps cut costs, and we" +
          " pass the savings on to you"
        }
      />
      <DetailItem name="Est taxes and fees" price={pricing.tax} />
      <hr />
      <TotalPriceItem>
        Est total: <Price>{pricing.total}</Price>
      </TotalPriceItem>
    </div>
  );
};

export default PricingDetail;
