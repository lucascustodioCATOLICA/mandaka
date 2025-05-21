import Navbar from "../../components/NavBar";
import HorizontalMenuItems from "../../components/HorizontalMenuItems";
import SectionMenuItems from "../../components/SectionMenuItems";
import Details from "../../components/Details";

function Menu() {
  return (
    <>
      <Navbar />
      <HorizontalMenuItems />
      <SectionMenuItems title="Entradas" />
      <SectionMenuItems title="Parrilla" />
      <SectionMenuItems title="Hamburguer" />
      <Details />
    </>
  );
}

export default Menu;
