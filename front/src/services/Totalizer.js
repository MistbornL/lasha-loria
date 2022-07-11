export const Totalizer = (data, targetCurrency, tax, total) => {
  return data.map((item) => {
    item.prices.map((price) => {
      if (price.currency.symbol === targetCurrency) {
        return (tax += Math.round(
          price.amount * item.count * 0.21,
          (total += Math.round(price.amount * item.count + tax))
        ));
      }
    });
  });
};
