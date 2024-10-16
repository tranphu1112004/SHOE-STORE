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
        
      <div className="mt-[85px] flex-grow md:mt-[150px] md:w-4/5 md:mx-auto lg:w-4/5">
      <UpSale/>
        <Outlet />
      </div>
      <FooterPage />
    </div>
  );
};

export default LayoutClient;
