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
import ListDetails from "../pages/ListDetails";

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
        path: "categorylist", //api
        element: <CategoryDetails />,
      },
      {
        path: "products", //smart phone
        element: <Products />,
        children: [
          {
            index: true,
            element: <ProductList />,
          },
        ],
      },
      {
        path: "details/:ProductDetailsId", //smartp detailes
        element: <ProductDetails />,
      },
      {
        path: "list/:id", //smartp detailes
        element: <ListDetails />,
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
