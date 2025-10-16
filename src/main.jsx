import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import AppProvider from "./routes/AppRoutes";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
