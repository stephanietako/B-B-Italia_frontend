import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
// import Navbar from "../Navbar";

const Layout = (sectionRef, handleClick) => {
  return (
    <main className="layout">
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
