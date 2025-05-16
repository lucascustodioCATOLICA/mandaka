import Logo from "../../assets/icons/logo.svg?react";
import Menu from "../../assets/icons/menu.svg?react";
import Bell from "../../assets/icons/bell.svg?react";
import Search from "../../assets/icons/search.svg?react";
import SubNavbar from "./components/SubNavbar";

import styles from "./styles.module.css";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const handleMenuPress = () => {
    navigate("/carrinho");
  };

  return (
    <div className={styles.margin}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar}>
          <div className={styles.navbar_top}>
            <div className={styles.left} onClick={handleMenuPress}>
              <Menu />
            </div>
            <div className={styles.title}>
              <Logo />
            </div>
            <div className={styles.right}>
              <Bell />
            </div>
          </div>
          <div className={styles.navbar_bottom}>
            <Search className={styles.icon} />
            <input
              className={styles.input}
              type="text"
              placeholder="Buscar produtos"
            />
          </div>
        </div>
        <SubNavbar />
      </div>
    </div>
  );
};

export default Navbar;
