import { createUserWithEmailAndPassword } from "firebase/auth";
import Autenticacao from "../../components/Autenticacao";
import Top from "./components/top//Top";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import styles from "./styles.module.css";
import { useNavigate, useSearchParams } from "react-router";
import useLogin from "../Login/hooks/useLogin";
import { firebaseAuth } from "../../infra/firebase-config";

function Cadastro() {
  const navigate = useNavigate();
  const { initUser } = useLogin();
  let [searchParams] = useSearchParams();

  const mesa = searchParams.get("mesa");

  const handleCreateAccount = ({ name, email, password, phone }) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const userId = userCredential.uid;
        initUser({ userId, name, mesa, phone });
        navigate("/");
      })
      .catch(() => {
        navigate("/");
      });
  };

  return (
    <div className={styles.container}>
      <Autenticacao />
      <Top />
      <Form onConcludeButtonPress={handleCreateAccount} />
      <Footer />
    </div>
  );
}

export default Cadastro;
