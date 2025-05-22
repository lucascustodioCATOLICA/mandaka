import { HashRouter, Routes, Route } from "react-router";

import Menu from "../../screens/Menu/Menu";
import Carrinho from "../../screens/Carrinho/Carrinho";
import FirstPage from "../../screens/FirstPage/FirstPage";
import Cadastro from "../../screens/Cadastro/Cadastro";
import Login from "../../screens/Login/Login";


const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/first-page" element={<FirstPage/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
