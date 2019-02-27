const item = {
  pricing: {
    subtotal: 102.96,
    savings: 3.85,
    tax: 8.92,
    total: 108.03,
    zip: 94587
  },
  itemDetails: {
    item_name: "Gaming Chair Model 111",
    quantity: 1,
    image:
      "https://opseat.com/wp-content/uploads/2018/07/ms-color-selector-red.jpg"
  }
};

export const getPricingData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(item), 1000);
  });
