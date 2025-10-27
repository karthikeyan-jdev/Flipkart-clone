import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Notfound from "../pages/Notfound";
import Category from "../components/category";
import Banner from "../components/Banner";
import SmartPhones from "../components/SmartPhones";
import ProductBanners from "../components/ProductBanners";
import Ad from "../components/Ad";
import ProductDetails from "../pages/ProductDetails";
import Wishlist from "../pages/Wishlist";

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
        path: "banner",
        element: <Banner />,
      },
      {
        path: "products",
        element: <Products />,
        children: [
          {
            index: true,
            element: <SmartPhones />,
          },
          {
            path: "ad",
            element: <Ad />,
          },
          {
            path: "banners",
            element: <ProductBanners />,
          },
          {
            path: "details/:id ",
            element: <ProductDetails />,
          },
        ],
        
      },
       {
        path: "whishlist",
        element: <Wishlist />,
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
