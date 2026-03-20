import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import  { AppRouter } from "./routes/AppRoutes";
import { FavoriteProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <FavoriteProvider>
        <Provider store={store}>
          <RouterProvider router={AppRouter} />
        </Provider>
      </FavoriteProvider>
    </AuthProvider>
  </React.StrictMode>,
);
