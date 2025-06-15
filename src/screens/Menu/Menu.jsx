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
  const [searchInputValue, setSearchInputValue] = useState("");

  const classicos = pratos.filter((item) => item.category === "classicos");
  const entrada = pratos.filter((item) => item.category === "entrada");
  const parrilla = pratos.filter((item) => item.category === "parrilla");
  const hamburguer = pratos.filter((item) => item.category === "hamburguer");

  const getFilterSection = (pratosByCategory) =>
    searchInputValue.length === 0 ||
    pratosByCategory.filter((item) =>
      item.name.toUpperCase().includes(searchInputValue.toUpperCase())
    ).length > 0;

  const getFilterList = (pratosByCategory) =>
    pratosByCategory.filter((item) =>
      item.name.toUpperCase().includes(searchInputValue.toUpperCase())
    );

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
      <Navbar onChangeSearchInput={setSearchInputValue} />
      {pratos.length > 0 && (
        <>
          {getFilterSection(classicos) && (
            <HorizontalMenuItems
              id="todos"
              list={getFilterList(classicos)}
              onProductItemPress={handleProductItemPress}
            />
          )}
          {getFilterSection(entrada) && (
            <SectionMenuItems
              id="entradas"
              title="Entradas"
              list={getFilterList(entrada)}
              onProductItemPress={handleProductItemPress}
            />
          )}
          {getFilterSection(parrilla) && (
            <SectionMenuItems
              id="parrilla"
              title="Parrilla"
              list={getFilterList(parrilla)}
              onProductItemPress={handleProductItemPress}
            />
          )}
          {getFilterSection(hamburguer) && (
            <SectionMenuItems
              id="hamburguer"
              title="Hamburguer"
              list={getFilterList(hamburguer)}
              onProductItemPress={handleProductItemPress}
            />
          )}
        </>
      )}
      <Details
        open={openDetails}
        onClose={handleCloseBottomsheet}
        selectedProduct={selectedProduct}
      />
    </>
  );
}

export default Menu;
