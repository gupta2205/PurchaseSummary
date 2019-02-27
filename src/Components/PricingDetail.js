import React from "react";
import Tooltip from "./Tooltip";

const Separator = () => <hr className="separator" />

const TotalPriceItem = ({ price }) => (
  <p className="detail-item total-price-item">
    <span>Est. Total</span>
    <Price className="total-price">{price}</Price>
  </p>
);
const Price = ({ children, negative, className = '' }) => (
  <span className={`detail-price${negative ? ' color-red' : ''} ${className}`}>{`${negative ? '-' : ''}$${children}`}</span>
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
      <span className="underlined-text">Pickup savings</span>
    </Tooltip>
    <Price negative>{price}</Price>
  </p>
);

const PricingDetail = ({ pricing, itemDetails }) => {
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
      <Separator/>
      <TotalPriceItem price={pricing.total} />
    </div>
  );
};

export default PricingDetail;
