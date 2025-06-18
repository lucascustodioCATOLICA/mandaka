import styles from "./styles.module.css";

const Input = ({ value, placeholder, onChangeText }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChangeText(e.target.value)}
      className={styles.input}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
