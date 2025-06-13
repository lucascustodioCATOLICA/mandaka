import Autenticacao from "../../components/Autenticacao";
import Top from "./components/top//Top";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import { useNavigate, useSearchParams } from "react-router";
import useLogin from "./hooks/useLogin";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../infra/firebase-config";

function Login() {
  const navigate = useNavigate();
  const { initUser } = useLogin();
  let [searchParams] = useSearchParams();

  const mesa = searchParams.get("mesa");

  const handleConcludeButtonPress = ({ email, password }) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const userId = userCredential.uid;
        initUser({ userId, name, mesa });
        navigate("/");
      })
      .catch(() => {
        navigate("/");
      });
  };

  return (
    <div>
      <Autenticacao />
      <Top />
      <Form onConcludeButtonPress={handleConcludeButtonPress} />
      <Footer />
    </div>
  );
}
export default Login;
