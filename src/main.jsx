import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";

import "react-spring-bottom-sheet/dist/style.css";

import AppRouter from "./infra/router/AppRouter";

import { firebaseConfig } from "./infra/firebase-config";
import "./infra/react-spring-bottomsheet/styles.css";
import "./constants/fonts.css";
import "./index.css";

initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
