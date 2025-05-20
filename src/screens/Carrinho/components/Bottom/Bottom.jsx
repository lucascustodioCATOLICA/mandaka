import Button from "../../../../components/Button";
import styles from "./Bottom.module.css";

function Bottom() {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <div className={styles.bold}>Total</div>
        <div>R$147.68</div>
      </div>
      <Button>Escolher forma de pagamento</Button>
    </div>
  );
}

export default Bottom;
