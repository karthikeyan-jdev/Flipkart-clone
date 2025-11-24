import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import AppProvider from "./routes/AppRoutes";
import { CartProvider } from "./context/CardContext";
import { FavoriteProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <FavoriteProvider>
        <CartProvider>
          <AppProvider />
        </CartProvider>
      </FavoriteProvider>
    </AuthProvider>
  </React.StrictMode>
);


