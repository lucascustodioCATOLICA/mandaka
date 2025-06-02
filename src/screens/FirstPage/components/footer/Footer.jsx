import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.buttonContainer}></div>
      <button className={styles.buttonContainer1}>Login</button>
      <button className={styles.buttonContainer1}>Inscreva-se</button>
      <div className={styles.text}>
        <p>
          <u>Só quero pedir hoje</u>
        </p>
      </div>
    </div>
  );
}

export default Footer;
