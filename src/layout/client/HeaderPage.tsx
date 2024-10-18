import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderPage = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isDowMenuNam, setisDowMenuNam] = useState(false);
  const [isUser, setisisUser] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  const toggleDowMenuNam = () => {
    setisDowMenuNam(!isDowMenuNam);
  };

  const toggleUser = () => {
    setisisUser(!isUser);
  };

  return (
    <div className=" ">
      <div
        className={`${
          isUser ? "" : "invisible"
        }  w-full h-lvh backdrop-opacity-10 backdrop-invert bg-black/70 z-10 absolute `}
      >
        <div className=" absolute text-3xl z-20 top-2 right-4 text-[#ffffffcc]">
          <span onClick={toggleUser} className="cursor-pointer">
            <i className="fa-solid fa-xmark "></i>
          </span>
        </div>
        <div className=" bg-white w-4/5 mx-auto p-5 pt-8 my-10 lg:flex mg:w-1/2 lg:w-2/3 lg:mt-36">
          <div className="mb-7 lg:w-1/2 lg:p-6">
            <p className="text-xl font-semibold mb-2">ĐĂNG NHẬP</p>
            <div className=" font-semibold">
              <div className="flex flex-col mb-6">
                <label className="text-base text-[#353535] pb-2">
                  Tên tài khoản hoặc địa chỉ email *
                </label>
                <input
                  className="outline-none w-full h-11 bor px-3 border-2 inset-1 bg-white"
                  type="text"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-base text-[#353535] pb-2">
                  Mật khẩu *
                </label>
                <input
                  type="password"
                  className="outline-none w-full h-11 bor px-3 border-2 inset-1 bg-white"
                />
              </div>
              <div className="flex py-5 items-center">
                <button
                  type="submit"
                  className="w-2/5 bg-red-900 text-white h-12"
                >
                  ĐĂNG NHẬP
                </button>
                <div className="w-3/5 px-4">
                  <input className="mx-2" type="checkbox" name="" id="" />
                  <span>Ghi nhớ mật khẩu</span>
                </div>
              </div>
              <Link to={""}>
                <span className="text-gray-500 font-normal">
                  Quên mật khẩu?
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 lg:p-6">
            <p className="text-xl font-semibold mb-2 ">ĐĂNG NHẬP</p>
            <div className=" font-semibold">
              <div className="flex flex-col mb-6">
                <label className="text-base text-[#353535] pb-2">
                  Địa chỉ email *
                </label>
                <input
                  className="outline-none w-full h-11 bor px-3 border-2 inset-1 bg-white"
                  type="text"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-base text-[#353535] pb-2">
                  Mật khẩu *
                </label>
                <input
                  type="password"
                  className="outline-none w-full h-11 bor px-3 border-2 inset-1 bg-white"
                />
              </div>
              <div className="flex py-5 items-center">
                <button
                  type="submit"
                  className="w-2/5 bg-red-900 text-white h-12"
                >
                  ĐĂNG KÝ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* top */}
      <div className=" w-full py-3 bg-black text-xl	">
        <div className="flex justify-between items-center px-7 lg:px-0 lg:w-4/5 lg:mx-auto">
          <div
            onClick={toggleMenu}
            className=" text-3xl md:text-5xl text-[#ffffffcc]  lg:hidden"
          >
            <span>
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
          {/* tài khoản */}
          <div className="hidden lg:block text-[#ffffffcc]  font-semibold	text-sm	relative lg:w-[25%]">
            <div onClick={toggleUser} className="cursor-pointer">
              <Link to={""}>
                <span>ĐĂNG NHẬP</span>
              </Link>
              <span> / </span>
              <Link to={""}>
                <span>ĐĂNG KÝ</span>
              </Link>
            </div>
          </div>
          {/* logo */}
          <div className="ms:w-4/6 lg:w-56">
            <img
              src={"/public/logo-mona.png"}
              className="w-3/5 mx-auto"
              alt=""
            />
          </div>
          {/* tìm kiếm / giỏ hàng */}
          <div className="relative lg:w-[25%]">
            <div className=" flex text-[#ffffffcc] font-semibold text-base 	lg:text-sm lg:float-right">
              {/* tìm kiếm  */}
              <span className="hidden lg:block">
                <span>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span
                  id="cart-button"
                  className="cursor-pointer mx-4"
                  onClick={toggleCart}
                >
                  <span>GIỎ HÀNG</span> / <span>1,250,000 VNĐ</span>
                </span>
              </span>
              <span
                id="cart-button"
                className="cursor-pointer  text-2xl md:text-4xl lg:text-base"
                onClick={toggleCart}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
          </div>
          <div className={`${isCartVisible ? "" : "invisible"} w-full h-lvh backdrop-opacity-10 z-10 backdrop-invert bg-black/30 absolute text-center right-0 top-0 lg:top-1/2 lg:right-[7%] lg:h-auto lg:w-1/5`}>
            <div className="absolute w-3/5 bg-white right-0 top-0 h-full lg:w-full lg:h-auto shadow-2xl">
              {/* Cart Contents */}
              <p onClick={toggleCart} className="absolute top-1 right-3 text-gray-400 lg:hidden">
                <i className="fa-solid fa-xmark"></i>
              </p>
              <div className="w-5/6 mx-auto">
                <p className="p-5 text-[15px] font-medium">GIỎ HÀNG</p>
                <hr className="w-20 mx-auto" />
                {/* Cart Item */}
                <div className="my-5 flex justify-between items-center">
                  <div className="w-1/3 h-15">
                    <img src={"../../../public/SABRINA+2+EP.png"} alt="Item" />
                  </div>
                  <div className="w-2/4">
                    <p className="text-xs text-gray-600">Sabrina 2 EP</p>
                    <p className="flex text-[10px]">
                      <span>1 x</span>
                      <span className="text-red-800">1,250,000 VNĐ</span>
                    </p>
                  </div>
                  <div className="w-1/12">
                    <i className="fa-regular fa-trash-can"></i>
                  </div>
                </div>
                <div>
                  <hr />
                  <div className="my-8 text-xs text-start">
                    <p className="flex justify-between">
                      <span>TỔNG:</span>
                      <span className="text-red-800">1,250,000 VNĐ</span>
                    </p>
                    <Link to={""}>
                      <button className="text-white text-[13px] mt-5 bg-black w-full h-12">XEM GIỎI HÀNG</button>
                    </Link>
                    <Link to={""}>
                      <button className="text-white text-[13px] mt-2 bg-red-800 w-full h-12">THANH TOÁN</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className={`${isMenu ? "" : "invisible"} lg:visible `}>
        <div className="w-full h-lvh absolute backdrop-opacity-10 backdrop-invert bg-black/30  left-0 top-0 lg:h-full  lg:relative">
          <div
            onClick={toggleMenu}
            className=" absolute top-3 right-5 text-2xl text-gray-200 cursor-pointer lg:hidden "
          >
            <i className="fa-solid fa-xmark "></i>
          </div>
          <nav className="shadow-xl leading-[4] flex w-3/5  bg-[rgb(53, 53, 53)] h-full max-h-screen px-4 py-12 backdrop-opacity-10 backdrop-invert bg-white/95 lg:bg-[#FFFfff] lg:text-[#000000] lg:py-0 lg:justify-center lg:relative lg:w-full lg:box-border lg:overflow-visible overflow-y-auto">
            <ul className="h-full w-full  lg:w-auto  lg:font-medium lg:flex  lg:space-x-8 lg:text-base">
              <li className="leading-[0] mb-7 lg:hidden">
                <input
                  className="border box-border w-5/6 h-11 text-sl px-3 outline-0"
                  type="text"
                  placeholder="Tìm kiếm..."
                />
                <button
                  type="submit"
                  className="w-1/6 bg-red-800 h-11 text-white"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </li>
              <Link to={""}>
                <li className="border-t-2 border-gray-50-500 lg:border-t-0 lg:px-5 lg:py-4 hover:lg:text-red-950 ">
                  TRANG CHỦ
                </li>
              </Link>
              <Link to={"/introduce"}>
                <li className="border-t-2 border-gray-50-500 lg:border-t-0 lg:px-5 lg:py-4 hover:lg:text-red-950 ">
                  GIỚI THIỆU
                </li>
              </Link>
              <Link to={""}>
                <li className="border-t-2 border-gray-50-500 lg:border-t-0 lg:px-5 lg:py-4 hover:lg:text-red-950 ">
                  GIÀY
                </li>
              </Link>
              <Link to={""}>
                <li className="border-t-2 border-gray-50-500 lg:border-t-0 lg:px-5 lg:py-4 hover:lg:text-red-950 ">
                  QUẦN ÁO
                </li>
              </Link>
              <Link to={""}>
                <li className="border-t-2 border-gray-50-500 lg:border-t-0 lg:px-5 lg:py-4 hover:lg:text-red-950 ">
                  <div
                    onClick={toggleDowMenuNam}
                    className="cursor-pointer flex justify-between mainHover"
                  >
                    <span>PHỤ KIỆN</span>
                    <span className="lg:text-[14px] lg:mx-1">
                      <i className="fa-solid fa-chevron-down"></i>
                    </span>
                  </div>
                  <ul
                    className={`${
                      isDowMenuNam ? "block" : "hidden"
                    } px-2 lg:absolute lg:h-auto lg:bg-white lg:lg:shadow-xl lg:px-6 lg:text-[#353535] lg:leading-[3] lg:top-[50px] lg:left-[56%] hovermenu`}
                  >
                    <Link to={""}>
                      <li className="hover:mx-auto">Classic</li>
                    </Link>
                    <Link to={""}>
                      <li>One star</li>
                    </Link>
                    <Link to={""}>
                      <li>Chuck 07s</li>
                    </Link>
                    <Link to={""}>
                      <li>Sunbaked</li>
                    </Link>
                  </ul>
                </li>
              </Link>

              <Link to={"/content"}>
                <li className="border-t-2 border-gray-50-500 lg:border-t-0 lg:px-5 lg:py-4 hover:lg:text-red-950 ">
                  TIN TỨC
                </li>
              </Link>
              <Link to={"/contact"}>
                <li className="border-t-2 border-gray-50-500 lg:border-t-0 lg:px-5 lg:py-4 hover:lg:text-red-950 ">
                  LIÊN HỆ
                </li>
              </Link>
              <Link to={""}>
                <li
                  onClick={toggleUser}
                  className="cursor-pointer border-t-2 border-gray-50-500 lg:border-t-0 lg:px-5 lg:hidden"
                >
                  ĐĂNG NHẬP
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
