import { useState } from "react";
import styles from "./styles.module.css";

function Form({ onConcludeButtonPress }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleConcludeButtonPress = () => {
    onConcludeButtonPress({ name, email, password, phone });
  };

  return (
    <div className={styles.geral}>
      <h1>INSCREVA-SE</h1>
      <div className={styles.forms}>
        <form action="">
          {" "}
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </form>
        <form action="">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <form action="">
          <input
            type="tel"
            placeholder="Telefone"
            onChange={(e) => setPhone(e.target.value)}
          />
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
