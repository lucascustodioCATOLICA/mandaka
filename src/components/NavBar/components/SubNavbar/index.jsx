import styles from "./styles.module.css";

const SubNavbar = () => {
  return (
    <div className={styles.row}>
      <div>
        <div className={styles.category}>Todos</div>
        <div className={styles.dot} />
      </div>
      <div>
        <div className={styles.category}>Entradas</div>
        <div className={styles.dot} />
      </div>
      <div>
        <div className={styles.category}>Parrilla</div>
        <div className={styles.dot} />
      </div>
      <div>
        <div className={styles.category}>Hambúrguer</div>
        <div className={styles.dot} />
      </div>
    </div>
  );
};

export default SubNavbar;
