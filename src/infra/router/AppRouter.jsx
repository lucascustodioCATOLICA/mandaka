import { HashRouter, Routes, Route } from "react-router";

import PaymentMethods from "../../screens/PaymentMethods/PaymentMethods";
import Carrinho from "../../screens/Carrinho/Carrinho";
import FirstPage from "../../screens/FirstPage/FirstPage";
import Cadastro from "../../screens/Cadastro/Cadastro";
import Login from "../../screens/Login/Login";
import NoLogin from "../../screens/NoLogin/NoLogin";
import Menu from "../../screens/Menu/Menu";
import Cozinha from "../../screens/Cozinha/Cozinha"; // Importe o componente Cozinha

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/first-page" element={<FirstPage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/no-login" element={<NoLogin />} />
        <Route path="/pagamento" element={<PaymentMethods />} />
        <Route path="/cozinha" element={<Cozinha />} /> {/* Adicione esta linha para a rota da Cozinha */}
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
