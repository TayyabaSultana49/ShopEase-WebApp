const API_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Unable to fetch products");
  }

  const data = await response.json();

  return data.products;
};