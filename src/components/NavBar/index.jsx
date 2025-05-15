import Logo from "../../assets/icons/logo.svg?react";
import Menu from "../../assets/icons/menu.svg?react";
import Bell from "../../assets/icons/bell.svg?react";
import Search from "../../assets/icons/search.svg?react";

import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.margin}>
      <div className={styles.navbar}>
        <div className={styles.navbar_top}>
          <div className={styles.left}>
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
    </div>
  );
};

export default Navbar;
