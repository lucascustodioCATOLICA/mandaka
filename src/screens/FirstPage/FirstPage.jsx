import { useNavigate, useParams } from "react-router";

import Top from "./components/top/Top";
import Center from "./components/center/Center";
import Footer from "./components/footer/Footer";
import styles from "./styles.module.css";

function FirstPage() {
  const params = useParams();
  const navigate = useNavigate();

  const mesa = params?.mesa;

  const handleLoginButtonPress = () => {
    if (!mesa) {
      navigate("/");
    }
    navigate(`/login?mesa=${mesa}`);
  };

  const handleCreateAccountButtonPress = () => {
    if (!mesa) {
      navigate("/");
    }
    navigate(`/cadastro?mesa=${mesa}`);
  };

  const handleNoLoginButtonPress = () => {
    if (!mesa) {
      navigate("/");
    }
    navigate(`/no-login?mesa=${mesa}`);
  };

  return (
    <div className={styles.container}>
      <Top />
      <Center />
      <Footer
        onNoLoginButtonPress={handleNoLoginButtonPress}
        onCreateAccountButtonPress={handleCreateAccountButtonPress}
        onLoginButtonPress={handleLoginButtonPress}
      />
    </div>
  );
}
export default FirstPage;
