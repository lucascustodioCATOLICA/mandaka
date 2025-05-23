import Autenticacao from "../../components/Autenticacao";
import Top from "./components/top//Top";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import styles from "./styles.module.css";
import { useState } from "react";

function Cadastro() {
  return (
    <div className={styles.container}>
      <Autenticacao />
      <Top />
      <Form />
      <Footer />
    </div>
  );
}

export default Cadastro;
