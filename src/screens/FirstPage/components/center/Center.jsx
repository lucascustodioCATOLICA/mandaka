import styles from "./styles.module.css";

function Center() {
  return (
    <div className={styles.center}>
      <div className={styles.textbv}>
        <h2>Bem-vindo</h2>
      </div>
      <div className={styles.text1}>
        <p>Experimente o melhor da nossa carne de sol</p>
      </div>
      <div className={styles.text2}>
        <p>
          Cadastre-se e aproveite benefícios exclusivos nas próximas visitas ou
          se preferir, é só pedir hoje mesmo e aproveitar o melhor da casa!
        </p>
      </div>
    </div>
  );
}

export default Center;
