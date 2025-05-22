import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "react-spring-bottom-sheet/dist/style.css";

import AppRouter from "./infra/router/AppRouter";

import "./infra/react-spring-bottomsheet/styles.css";
import "./constants/fonts.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
