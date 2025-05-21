import { HashRouter, Routes, Route } from "react-router";

import Menu from "../../screens/Menu/Menu";
import Carrinho from "../../screens/Carrinho/Carrinho";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
