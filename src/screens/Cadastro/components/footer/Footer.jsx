import { useNavigate } from "react-router";
import styles from "./styles.module.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className={styles.geral}>
      <div className={styles.text}>
        <p>Já tem uma conta? </p>
      </div>
      <div onClick={() => navigate("/login")} className={styles.login}>
        <p>
          <u onClick={() => navigate("/login")}>Faça login aqui.</u>
        </p>
      </div>
    </div>
  );
}

export default Footer;
