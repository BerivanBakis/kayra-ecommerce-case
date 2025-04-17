export const basket = [];

export const addToBasket = (product) => {
  basket.push(product);
  console.log("Sepete eklendi:", product);
};
