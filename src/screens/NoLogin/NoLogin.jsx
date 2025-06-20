import { useNavigate, useSearchParams } from "react-router";

import Autenticacao from "../../components/Autenticacao";
import Top from "./components/top//Top";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import useLogin from "../Login/hooks/useLogin";

function NoLogin() {
  let [searchParams] = useSearchParams();
  const { initUser } = useLogin();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const mesa = searchParams.get("mesa");

  const handleFinishButtonPress = () => {
    initUser({ name, phone, mesa });
    navigate("/");
  };

  return (
    <div>
      <Autenticacao />
      <Top />
      <Form
        onNameInputChange={setName}
        onTelInputChange={setPhone}
        onFinishButtonPress={handleFinishButtonPress}
      />
      <Footer />
    </div>
  );
}
export default NoLogin;
