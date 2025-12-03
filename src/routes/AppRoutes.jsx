import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Notfound from "../pages/Notfound";
import ProductDetails from "../pages/ProductDetails";
import LocalProductDetails from "../pages/LocalProductDetails";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import CategoryDetails from "../pages/CategoryDetails";
import Category from "../components/Category";
import BecomeASeller from "../pages/BecomeASeller";
import Wishlist from "../pages/Wishlist";
import SmartPhonesList from "../pages/SmartPhonesList";
import MobileShortCut from "../pages/MobileShortCut";
import Signup from "../pages/Signup";

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
        path: "categorylist", //API Call Data
        element: <CategoryDetails />,
      },
      {
        path: "products", //Local Array(Smart phone) Data
        element: <Products />,
        children: [
          {
            index: true,
            element: <SmartPhonesList />,
          },
        ],
      },
      {
        path: "details/api/:id",
        element: <ProductDetails />,
      },
      {
        path: "details/local/:id",
        element: <LocalProductDetails />,
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
        path: "signup",
        element: <Signup />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
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
  {
    path: "mobileShortCut",
    element: <MobileShortCut />,
  },
]);

export default function AppProvider() {
  return <RouterProvider router={AppRouter} />;
}
