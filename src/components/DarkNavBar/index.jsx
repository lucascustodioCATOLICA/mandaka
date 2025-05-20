import { useNavigate } from "react-router";

import Logo from "../../assets/icons/logo.svg?react";
import BackArrow from "../../assets/icons/back-arrow.svg?react";

import styles from "./styles.module.css";

const DarkNavbar = ({ onGoBack }) => {
  const navigate = useNavigate();

  const handleLogoPress = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className={styles.navbar_container}>
      <div className={styles.back} onClick={onGoBack}>
        <BackArrow />
      </div>
      <div className={styles.title} onClick={handleLogoPress}>
        <Logo />
      </div>
    </div>
  );
};

export default DarkNavbar;
