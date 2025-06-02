import { v4 as uuidv4 } from "uuid";

const addProductsToCarrinho = ({
  count,
  userObservations,
  id,
  name,
  duration,
  price,
  imageUrl,
  desc,
  label,
}) => {
  let carrinho = [];
  const carrinhoFromLocalStorage = localStorage.getItem("carrinho");
  if (carrinhoFromLocalStorage) {
    carrinho = JSON.parse(carrinhoFromLocalStorage);
  }
  carrinho.push({
    count,
    id: uuidv4(),
    userObservations,
    price: count * price,
    product: {
      id,
      name,
      duration,
      price,
      imageUrl,
      desc,
      label,
    },
  });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
};

const updateProducts = (products) => {
  localStorage.setItem("carrinho", JSON.stringify(products));
};

const getProductsFromCarrinho = () => {
  const carrinho = localStorage.getItem("carrinho");
  if (carrinho) {
    return JSON.parse(carrinho);
  }
  return [];
};

const resetProductsFromCarrinho = () => {
  localStorage.setItem("carrinho", JSON.stringify([]));
};

export const ProductsStorage = {
  addProductsToCarrinho,
  getProductsFromCarrinho,
  updateProducts,
  resetProductsFromCarrinho,
};
