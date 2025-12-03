import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "sonner";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Toaster richColors position="bottom-center" />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
