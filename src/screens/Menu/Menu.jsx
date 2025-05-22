import Navbar from "../../components/NavBar";
import HorizontalMenuItems from "../../components/HorizontalMenuItems";
import SectionMenuItems from "../../components/SectionMenuItems";
import Details from "../../components/Details";
import { PRODUCTS } from "../../constants/products";
import { useState } from "react";

function Menu() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDetails, setOpenDetails] = useState(false);

  const handleCloseBottomsheet = () => {
    setOpenDetails(false);
    setSelectedProduct(null);
  };

  const handleProductItemPress = (value) => {
    setOpenDetails(true);
    setSelectedProduct(value);
  };

  return (
    <>
      <Navbar />
      <HorizontalMenuItems
        list={PRODUCTS.carrousel}
        onProductItemPress={handleProductItemPress}
      />
      <SectionMenuItems
        title="Entradas"
        list={PRODUCTS.open}
        onProductItemPress={handleProductItemPress}
      />
      <SectionMenuItems
        title="Parrilla"
        list={PRODUCTS.parrilla}
        onProductItemPress={handleProductItemPress}
      />
      <SectionMenuItems
        title="Hamburguer"
        list={PRODUCTS.hamburguers}
        onProductItemPress={handleProductItemPress}
      />
      <Details
        open={openDetails}
        onClose={handleCloseBottomsheet}
        selectedProduct={selectedProduct}
      />
    </>
  );
}

export default Menu;
