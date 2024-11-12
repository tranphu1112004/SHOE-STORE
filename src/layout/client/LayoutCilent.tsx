import HeaderPage from "./HeaderPage";
import { Outlet } from "react-router-dom";
import FooterPage from "./FooterPage";

const LayoutClient = () => {
  return (
      <div className="flex flex-col min-h-screen bg-[#FFFAFA]">
        <div className="fixed w-full z-10">
          <HeaderPage />
        </div>
        <div className="md:w-4/5 md:mx-auto lg:w-5/6">
          <Outlet />
        </div>
        <div className="">
          <FooterPage />
        </div>
      </div>
  );
};

export default LayoutClient;
