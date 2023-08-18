import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./index";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
