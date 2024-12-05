import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import App from "./App.jsx";
import "./w3.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);