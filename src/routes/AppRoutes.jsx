import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Notfound from "../pages/Notfound";
import ProductDetails from "../pages/ProductDetails";
import ProductList from "../pages/ProductList";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import CategoryDetails from "../pages/CategoryDetails";
import Category from "../components/Category";
import BecomeASeller from "../pages/BecomeASeller";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "category/:id",
        element: <CategoryDetails />,
      },
      {
        path: "products",
        element: <Products />,
        children: [
          {
            index: true,
            element: <ProductList />,
          },
        ],
      },
      {
        path: "details/:id",
        element: <ProductDetails />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "becomeASeller",
        element: <BecomeASeller />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

export default function AppProvider() {
  return <RouterProvider router={AppRouter} />;
}
