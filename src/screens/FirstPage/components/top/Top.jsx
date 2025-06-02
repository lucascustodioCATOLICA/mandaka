import styles from "./styles.module.css";

function Top() {
  return (
    <div className={styles.fire}>
      <img src="../../../public/images/login/vectorfogo.png" />
      <div className={styles.name}>
        <img src="../../../../src/assets/icons/logo.svg" alt="" />
      </div>
    </div>
  );
}

export default Top;
