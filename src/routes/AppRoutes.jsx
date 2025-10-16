import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Notfound from "../pages/Notfound";

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
        index: "products",
        element: <Products />,
      },
      {
        index: "*",
        element: <Notfound />,
      },
    ],
  },
]);

export default function AppProvider() {
  return <RouterProvider router={AppRouter} />;
}
