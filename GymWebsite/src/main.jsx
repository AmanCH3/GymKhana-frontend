import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextWrapper from "./components/context/ContextWrapper.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
      <ToastContainer />
    </ContextWrapper>

  </React.StrictMode>
);
