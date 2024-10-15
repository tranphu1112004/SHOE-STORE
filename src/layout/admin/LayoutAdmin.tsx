import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import { Outlet } from "react-router-dom";
import FooterAdmin from "./FooterAdmin";



const LayoutAdmin = () => {
  return (
    <div>
      <HeaderAdmin />
      <Outlet />
      <FooterAdmin />
    </div>
  );
};

export default LayoutAdmin;
