import { useEffect, useState } from "react";

import Navbar from "../../components/NavBar";
import HorizontalMenuItems from "../../components/HorizontalMenuItems";
import SectionMenuItems from "../../components/SectionMenuItems";
import Details from "../../components/Details";
import { PratosService } from "../../services/pratos";

function Menu() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDetails, setOpenDetails] = useState(false);
  const [pratos, setPratos] = useState([]);

  const classicos = pratos.filter((item) => item.category === "classicos");
  const entrada = pratos.filter((item) => item.category === "entrada");
  const parrilla = pratos.filter((item) => item.category === "parrilla");
  const hamburguer = pratos.filter((item) => item.category === "hamburguer");

  const handleCloseBottomsheet = () => {
    setOpenDetails(false);
    setSelectedProduct(null);
  };

  const handleProductItemPress = (value) => {
    setOpenDetails(true);
    setSelectedProduct(value);
  };

  useEffect(() => {
    const getPratos = async () => {
      const pratosFromService = await PratosService.getPratos();
      setPratos(pratosFromService);
    };
    getPratos();
  }, []);

  return (
    <>
      <Navbar />
      <HorizontalMenuItems
        list={classicos}
        onProductItemPress={handleProductItemPress}
      />
      <SectionMenuItems
        title="Entradas"
        list={entrada}
        onProductItemPress={handleProductItemPress}
      />
      <SectionMenuItems
        title="Parrilla"
        list={parrilla}
        onProductItemPress={handleProductItemPress}
      />
      <SectionMenuItems
        title="Hamburguer"
        list={hamburguer}
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
