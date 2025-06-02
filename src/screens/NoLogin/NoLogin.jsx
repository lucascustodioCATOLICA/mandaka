import Autenticacao from "../../components/Autenticacao";
import Top from "./components/top//Top";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";

function NoLogin() {
  return (
    <div>
      <Autenticacao />
      <Top />
      <Form />
      <Footer />
    </div>
  );
}
export default NoLogin;
