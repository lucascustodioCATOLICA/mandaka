import styles from "./styles.module.css";

const Input = ({ placeholder }) => {
  return (
    <input className={styles.input} type="text" placeholder={placeholder} />
  );
};

export default Input;
