import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Menu from "./screens/Menu";
import "./constants/fonts.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Menu />
  </StrictMode>
);
