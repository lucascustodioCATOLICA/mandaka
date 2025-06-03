import styles from "./styles.module.css";

function Footer({
  onNoLoginButtonPress,
  onLoginButtonPress,
  onCreateAccountButtonPress,
}) {
  return (
    <div className={styles.footer}>
      <div className={styles.buttonContainer}></div>
      <button onClick={onLoginButtonPress} className={styles.buttonContainer1}>
        Login
      </button>
      <button
        onClick={onCreateAccountButtonPress}
        className={styles.buttonContainer1}
      >
        Inscreva-se
      </button>
      <div className={styles.text}>
        <p onClick={onNoLoginButtonPress}>
          <u>Só quero pedir hoje</u>
        </p>
      </div>
    </div>
  );
}

export default Footer;
