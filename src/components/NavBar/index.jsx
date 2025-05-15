import "./styles.css";

import Logo from "../../assets/icons/logo.svg?react";
import Menu from "../../assets/icons/menu.svg?react";
import Bell from "../../assets/icons/bell.svg?react";
import Search from "../../assets/icons/search.svg?react";

const Navbar = () => {
  return (
    <div className="margin">
      <div className="navbar">
        <div className="navbar-top">
          <div className="left">
            <Menu />
          </div>
          <div className="title">
            <Logo />
          </div>
          <div className="right">
            <Bell />
          </div>
        </div>
        <div className="navbar-bottom">
          <Search className="icon" />
          <input
            className="input"
            type="text"
            placeholder="Buscar produtos"
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
