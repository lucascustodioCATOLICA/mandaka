import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.geral}>
      <div className={styles.text}>
        <p>Não tem uma conta? </p>
      </div>
      <div className={styles.login}>
        <p>
          <u>Faça seu cadastro aqui.</u>
        </p>
      </div>
    </div>
  );
}

export default Footer;
