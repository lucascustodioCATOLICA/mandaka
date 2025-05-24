import Button from "../../../../components/Button";
import { formatMoney } from "../../../../helpers/format-money";
import styles from "./Bottom.module.css";

function Bottom({ price }) {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <div className={styles.bold}>Total</div>
        <div>R${formatMoney(price)}</div>
      </div>
      <Button>Escolher forma de pagamento</Button>
    </div>
  );
}

export default Bottom;
