import mockItem, { getPricingData } from "../../data/item";

// Action types
const FETCH_ITEM_DATA = "FETCH_ITEM_DATA";

// Action creators
export const fetchItemData = () => dispatch => {
  return getPricingData().then(result => dispatch({
    type: FETCH_ITEM_DATA,
    payload: result
  }));
};

// Selectors
export const getItem = ({ item }) => item;

const item = (state = null, action) => {
  switch (action.type) {
    case FETCH_ITEM_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default item;
