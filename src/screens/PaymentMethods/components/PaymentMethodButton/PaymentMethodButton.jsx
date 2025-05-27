import styles from "./PaymentMethodButton.module.css";

const PaymentMethodButton = ({ isActive, name, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={isActive ? styles.button_checked : styles.button}
    >
      <div className={isActive ? styles.checkbox_checked : styles.checkbox} />
      <div className={styles.name_container}>
        {icon}
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  );
};

export default PaymentMethodButton;
