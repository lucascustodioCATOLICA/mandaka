import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";

import DarkNavbar from "../../components/DarkNavBar";
import Bottom from "./components/Bottom/Bottom";
import ProductItem from "./components/ProductItem/ProductItem";

import styles from "./Carrinho.module.css";
import { ProductsStorage } from "../../infra/storage/products";
import { formatMoney } from "../../helpers/format-money";

function Carrinho() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const price = useMemo(() => {
    let value = 0;
    products.forEach((item) => (value += item.price));
    return value;
  }, [products]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleMinusButtonPress = (id) => {
    setProducts((prev) => {
      const newProducts = prev.map((item) => {
        if (item.id !== id) {
          return item;
        }
        const newCount = item.count--;
        if (newCount === 0) {
          return { ...item, removed: true };
        }
        const newPrice = newCount * item.product.price;
        return { ...item, count: newCount, price: newPrice };
      });
      const newProductsFiltered = newProducts.filter((item) => !item.removed);
      ProductsStorage.updateProducts(newProductsFiltered);
      return newProductsFiltered;
    });
  };

  const handlePlusButtonPress = (id) => {
    setProducts((prev) => {
      console.log(prev);
      const newProducts = prev.map((item) => {
        if (item.id !== id) {
          return item;
        }
        console.log(item);
        const newCount = item.count++;
        const newPrice = newCount * item.product.price;
        return { ...item, count: newCount, price: newPrice };
      });
      console.log(newProducts);
      ProductsStorage.updateProducts(newProducts);
      return newProducts;
    });
  };

  const handleMethodPaymentButtonPress = () => {
    navigate("/pagamento");
  };

  useEffect(() => {
    const productsFromStorage = ProductsStorage.getProductsFromCarrinho();
    setProducts(productsFromStorage);
  }, []);

  return (
    <div className={styles.background}>
      <DarkNavbar onGoBack={handleGoBack} />
      <div className={styles.products}>
        {products?.length === 0 && (
          <div className={styles.no_products}>Sem pedidos</div>
        )}
        {products.map((item) => (
          <ProductItem
            id={item.id}
            name={item.product.name}
            price={formatMoney(item.product.price)}
            label={item.product.name}
            count={item.count}
            image={item.product.imageUrl}
            onMinusButtonPress={handleMinusButtonPress}
            onPlusButtonPress={handlePlusButtonPress}
          />
        ))}
      </div>
      <Bottom
        onMethodPaymentButtonPress={handleMethodPaymentButtonPress}
        price={price}
      />
    </div>
  );
}

export default Carrinho;
