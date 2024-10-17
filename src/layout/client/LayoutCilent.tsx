import HeaderPage from "./HeaderPage";
import { Outlet } from "react-router-dom";
import FooterPage from "./FooterPage";
import UpSale from "../../views/pages/Home/UpSale";

const LayoutClient = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFAFA]">
      <div className="fixed w-full z-10">
        <HeaderPage />
      </div>
      <div className=" md:w-5/6 md:mx-auto lg:w-4/5">
        <Outlet />
      </div>
      <FooterPage />
    </div>
  );
};

export default LayoutClient;
