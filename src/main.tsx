import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as BR } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BR>
      <App />
    </BR>
  </StrictMode>,
);
