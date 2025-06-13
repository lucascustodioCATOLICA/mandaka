import { useState } from "react";
import styles from "./styles.module.css";

function Form({ onConcludeButtonPress }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleConcludeButtonPress = () => {
    onConcludeButtonPress({ email, password });
  };

  return (
    <div className={styles.geral}>
      <h1>LOGIN</h1>
      <div className={styles.forms}>
        <form action="">
          {" "}
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </form>

        <form action="">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button className={styles.button} onClick={handleConcludeButtonPress}>
          Concluir
        </button>
      </div>
    </div>
  );
}

export default Form;
