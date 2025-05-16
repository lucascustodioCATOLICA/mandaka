import { BrowserRouter, Routes, Route } from "react-router";

import Menu from "../../screens/Menu/Menu";
import Carrinho from "../../screens/Carrinho/Carrinho";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
