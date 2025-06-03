import styles from "./styles.module.css";

const Button = ({ onPress, children, disabled }) => {
  const style = disabled ? styles.container_disabled : styles.container;

  const handleButtonPress = () => {
    if (disabled) return;
    onPress();
  };

  return (
    <div className={style} onClick={handleButtonPress}>
      {children}
    </div>
  );
};

export default Button;
