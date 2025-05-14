import "./styles.css";

import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="left"></div>
        <div className="title">
          <img className="img" src={Logo} alt="Logo" />
        </div>
        <div className="right"></div>
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
  );
};

export default Navbar;
