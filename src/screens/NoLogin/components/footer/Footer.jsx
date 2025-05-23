import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.geral}>
      <div className={styles.text}>
        <p>Já tem uma conta? </p>
      </div>
      <div className={styles.login}>
        <p><u>Faça login aqui.</u></p>
      </div>
    </div>
  );
}

export default Footer;
