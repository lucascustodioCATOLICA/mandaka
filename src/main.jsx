import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "./infra/router/AppRouter";

import "./constants/fonts.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
