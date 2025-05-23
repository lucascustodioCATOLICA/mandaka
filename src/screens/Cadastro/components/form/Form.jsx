import styles from "./styles.module.css";

function Form() {
  return (
    <div className={styles.geral}>
      <h1>INSCREVA-SE</h1>
      <div className={styles.forms}>
        <form action="">
          {" "}
          <input type="text" placeholder="Nome" />{" "}
        </form>
        <form action="">
          <input type="number" placeholder="Cpf" />
        </form>
        <form action="">
          <input type="password" placeholder="Senha" />
        </form>
        <button className={styles.button}>Concluir</button>
      </div>
    </div>
  );
}

export default Form;
