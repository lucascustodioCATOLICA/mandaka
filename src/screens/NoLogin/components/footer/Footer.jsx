import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.geral}>
      <div className={styles.text}>
        <p>Quer ganhar benefícios? </p>
      </div>
      <div className={styles.login}>
        <p>
          <u>Inscreva-se</u>
        </p>
      </div>
    </div>
  );
}

export default Footer;
