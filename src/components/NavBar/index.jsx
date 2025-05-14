import "./styles.css";

import Logo from "../../assets/icons/logo.svg";
import Menu from "../../assets/icons/menu.svg";
import Bell from "../../assets/icons/bell.svg";

const Navbar = () => {
  return (
    <div className="margin">
      <div className="navbar">
        <div className="navbar-top">
          <div className="left">
            <img className="img" src={Menu} alt="menu" />
          </div>
          <div className="title">
            <img className="img" src={Logo} alt="Logo" />
          </div>
          <div className="right">
            <img className="img" src={Bell} alt="bell" />
          </div>
        </div>
        <div>
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
