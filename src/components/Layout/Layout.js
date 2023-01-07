import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
const Layout = () => {
  return (
    <main className="layout">
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
