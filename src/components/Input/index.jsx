import styles from "./styles.module.css";

const Input = ({ placeholder, onChangeText }) => {
  return (
    <input
      onChange={(e) => onChangeText(e.target.value)}
      className={styles.input}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
