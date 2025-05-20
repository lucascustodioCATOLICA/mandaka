import DarkNavbar from "../../components/DarkNavBar";
import Bottom from "./components/Bottom/Bottom";
import ProductItem from "./components/ProductItem/ProductItem";

import styles from "./Carrinho.module.css";
import { useNavigate } from "react-router";

function Carrinho() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.background}>
      <DarkNavbar onGoBack={handleGoBack} />
      <div className={styles.products}>
        <ProductItem
          id={1}
          name="Steak do Cowboy"
          price="34,90"
          label="Parrilla"
          count={1}
          image="/images/foods/menu-item-model-1.png"
        />
        <div style={{ marginTop: 32 }} />
        <ProductItem
          id={1}
          name="Steak do Cowboy"
          price="34,90"
          label="Parrilla"
          count={1}
          image="/images/foods/menu-item-model-1.png"
        />
        <div style={{ marginTop: 32 }} />
        <ProductItem
          id={1}
          name="Steak do Cowboy"
          price="34,90"
          label="Parrilla"
          count={1}
          image="/images/foods/menu-item-model-1.png"
        />
        <div style={{ marginTop: 32 }} />
        <ProductItem
          id={1}
          name="Steak do Cowboy"
          price="34,90"
          label="Parrilla"
          count={1}
          image="/images/foods/menu-item-model-1.png"
        />
        <div style={{ marginTop: 32 }} />
        <ProductItem
          id={1}
          name="Steak do Cowboy"
          price="34,90"
          label="Parrilla"
          count={1}
          image="/images/foods/menu-item-model-1.png"
        />
        <div style={{ marginTop: 32 }} />
      </div>
      <Bottom />
    </div>
  );
}

export default Carrinho;
