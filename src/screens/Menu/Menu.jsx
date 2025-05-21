import Navbar from "../../components/NavBar";
import HorizontalMenuItems from "../../components/HorizontalMenuItems";
import SectionMenuItems from "../../components/SectionMenuItems";
import Details from "../../components/Details";
import { PRODUCTS } from "../../constants/products";

function Menu() {
  return (
    <>
      <Navbar />
      <HorizontalMenuItems list={PRODUCTS.carrousel} />
      <SectionMenuItems title="Entradas" list={PRODUCTS.open} />
      <SectionMenuItems title="Parrilla" list={PRODUCTS.parrilla} />
      <SectionMenuItems title="Hamburguer" list={PRODUCTS.hamburguers} />
      <Details />
    </>
  );
}

export default Menu;
