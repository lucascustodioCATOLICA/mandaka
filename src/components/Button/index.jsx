import styles from "./styles.module.css";

const Button = ({ onPress, children }) => {
  return (
    <div className={styles.container} onClick={onPress}>
      {children}
    </div>
  );
};

export default Button;
