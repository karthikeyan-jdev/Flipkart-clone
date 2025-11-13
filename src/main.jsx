import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import AppProvider from "./routes/AppRoutes";
import { CartProvider } from "./context/CardContext";
import { FavoriteProvider } from "./context/WishlistContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoriteProvider>
      <CartProvider>
        <AppProvider />
      </CartProvider>
    </FavoriteProvider>
  </React.StrictMode>
);
