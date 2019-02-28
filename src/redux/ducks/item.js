import mockItem, { getPricingData } from "../../data/item";

const promotionCodes = {
  DISCOUNT: 0.1
};

// Action types
const FETCH_ITEM_DATA = "FETCH_ITEM_DATA";
const APPLY_PROMO_CODE = "APPLY_PROMO_CODE";

// Action creators
export const fetchItemData = () => dispatch => {
  return getPricingData().then(result =>
    dispatch({
      type: FETCH_ITEM_DATA,
      payload: result
    })
  );
};

export const applyPromoCode = code => dispatch => {
  dispatch({
    type: APPLY_PROMO_CODE,
    payload: code
  });
};

// Selectors
export const getItem = ({ item }) => item;

const item = (state = null, action) => {
  switch (action.type) {
    case FETCH_ITEM_DATA:
      return action.payload;
    case APPLY_PROMO_CODE:
      const item = state;
      const code = action.payload;
      const discount = promotionCodes[code];

      return item
        ? {
            ...item,
            pricing: {
              ...item.pricing,
              total: discount
                ? (1 - discount) * item.pricing.total
                : item.pricing.total
            }
          }
        : null;
    default:
      return state;
  }
};

export default item;
