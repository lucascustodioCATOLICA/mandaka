import Button from "../../../../components/Button";
import { formatMoney } from "../../../../helpers/format-money";
import styles from "./Bottom.module.css";

function Bottom({ price, onMethodPaymentButtonPress }) {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <div className={styles.bold}>Total</div>
        <div>R${formatMoney(price)}</div>
      </div>
      <Button disabled={price === 0} onPress={onMethodPaymentButtonPress}>
        Escolher forma de pagamento
      </Button>
    </div>
  );
}

export default Bottom;
