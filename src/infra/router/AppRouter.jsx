import { HashRouter, Routes, Route } from "react-router";

import PaymentMethods from "../../screens/PaymentMethods/PaymentMethods";
import Carrinho from "../../screens/Carrinho/Carrinho";
import FirstPage from "../../screens/FirstPage/FirstPage";
import Cadastro from "../../screens/Cadastro/Cadastro";
import Login from "../../screens/Login/Login";
import Menu from "../../screens/Menu/Menu";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pagamento" element={<PaymentMethods />} />
        <Route path="/first-page" element={<FirstPage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
