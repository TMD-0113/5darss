import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalContextProvider } from "./context/globalContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
    <Toaster position="top-center" />
  </GlobalContextProvider>
);
