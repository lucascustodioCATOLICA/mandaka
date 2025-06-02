import styles from "./styles.module.css";

function Form() {
  return (
    <div className={styles.geral}>
      <h1>Mesa</h1>
      <div className={styles.textparagraph}>
        <p>
          Informe seu nome para que nossa equipe possa identificar seu pedido e
          entregá-lo certinho na sua mesa.
        </p>
      </div>
      <div className={styles.forms}>
        <form action="">
          {" "}
          <input type="text" placeholder="Nome Completo" />{" "}
        </form>
        <button className={styles.button}>Concluir</button>
      </div>
    </div>
  );
}

export default Form;
