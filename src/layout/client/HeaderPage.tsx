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
        <div className=" bg-white w-4/5 mx-auto p-5 pt-8 my-10 md:flex md:w-1/2 md:mt-52">
          <div className="mb-7 md:w-1/2 md:p-6">
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
          <div className="md:w-1/2 md:p-6">
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
        <div className="flex justify-between items-center px-7 md:px-0 md:w-4/5 md:mx-auto">
          <div
            onClick={toggleMenu}
            className=" text-3xl  text-[#ffffffcc]  md:hidden"
          >
            <span>
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
          {/* tài khoản */}
          <div className="hidden md:block text-[#ffffffcc]  font-semibold	text-sm	relative md:w-[25%]">
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
          <div className="w-3/6 md:w-1/6">
            <img
              src={"/public/logo-mona.png"}
              className="w-3/5 mx-auto"
              alt=""
            />
          </div>
          {/* tìm kiếm / giỏ hàng */}
          <div className="relative md:w-[25%]">
            <div className=" flex text-[#ffffffcc] font-semibold text-base 	md:text-sm md:float-right">
              {/* tìm kiếm  */}
              <span className="hidden md:block">
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
                className="cursor-pointer  text-2xl md:text-base"
                onClick={toggleCart}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
          </div>
          <div
            id="cart-list"
            className={`${
              isCartVisible ? "" : "invisible"
            } w-full h-lvh backdrop-opacity-10 backdrop-invert bg-black/30 absolute text-center right-0 top-0  md:w-1/6 md:h-auto md:z-50`}
          >
            <div className=" absolute w-3/5 bg-white text-center right-0 top-0 h-full backdrop-opacity-10 backdrop-invert bg-white/95 shadow-sm md:w-full md:h-auto md:top-20 md:transition-all	 md:right-[50%] md:shadow-xl py-4">
              <p
                onClick={toggleCart}
                className="absolute top-1 right-3 text-gray-400 md:hidden"
              >
                <i className="fa-solid fa-xmark "></i>
              </p>
              <div className="w-5/6 mx-auto">
                <div className="p-5 text-[15px] font-medium">
                  <p>GIỎ HÀNG</p>
                </div>
                <hr className=" w-20 mx-auto" />
                <div className=" my-5 flex justify-between items-center">
                  <div className="w-1/3 h-15">
                    <img
                      className="w-full h-full"
                      src={"../../../public/SABRINA+2+EP.png"}
                      alt=""
                    />
                  </div>
                  <div className="w-2/4">
                    <span className=" text-xs text-left text-gray-600">
                      <p>Sabrina 2 EP</p>
                      <p className="flex">
                        <span className="text-[10px]">1 x</span>
                        <span className="mx-1 text-[10px] font-semibold">
                          1,250,000
                        </span>
                      </p>
                    </span>
                  </div>
                  <div className="">
                    <div>
                      <i className="fa-solid fa-xmark "></i>
                    </div>
                  </div>
                </div>
                <hr />
                <p className="font-semibold text-sm my-3 text-gray-800">
                  Tổng phụ: 1,250,000 ₫
                </p>
                <hr />
                <div className="text-base font-semibold text-white my-2">
                  <button className="w-full py-2 bg-red-800 my-2 hover:bg-red-950 ">
                    XEM GỎI HÀNG
                  </button>
                  <button className="w-full py-2 bg-gray-800 hover:bg-gray-900 ">
                    THANH TOÁN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isMenu ? "" : "invisible"} md:visible `}>
        <div className="w-full h-lvh absolute backdrop-opacity-10 backdrop-invert bg-black/30  left-0 top-0 md:h-full  md:relative">
          <div
            onClick={toggleMenu}
            className=" absolute top-3 right-5 text-2xl text-gray-200 cursor-pointer md:hidden "
          >
            <i className="fa-solid fa-xmark "></i>
          </div>
          <nav className="shadow-xl leading-[4] flex w-4/6 bg-[rgb(53, 53, 53)] h-full max-h-screen px-4 py-12 backdrop-opacity-10 backdrop-invert bg-white/95 md:bg-[#FFFfff] md:text-[#000000] md:py-0 md:justify-center md:relative md:w-full md:box-border md:overflow-visible overflow-y-auto">
            <ul className="h-full md:text-sm lg:md:font-medium md:flex  md:space-x-8 lg:text-base">
              <li className="leading-[0] mb-7 md:hidden">
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
                <li className="border-t-2 border-gray-50-500 md:border-t-0 md:px-5 md:py-4 hover:md:text-red-950 ">
                  TRANG CHỦ
                </li>
              </Link>
              <Link to={""}>
                <li className="border-t-2 border-gray-50-500 md:border-t-0 md:px-5 md:py-4 hover:md:text-red-950 ">
                  GIỚI THIỆU
                </li>
              </Link>
              <Link to={""}>
                <li className="border-t-2 border-gray-50-500 md:border-t-0 md:px-5 md:py-4 hover:md:text-red-950 ">
                  GIÀY
                </li>
              </Link>
              <Link to={""}>
                <li className="border-t-2 border-gray-50-500 md:border-t-0 md:px-5 md:py-4 hover:md:text-red-950 ">
                  QUẦN ÁO
                </li>
              </Link>
              <Link to={""}>
                <li className="border-t-2 border-gray-50-500 md:border-t-0 md:px-5 md:py-4 hover:md:text-red-950 ">
                  <div
                    onClick={toggleDowMenuNam}
                    className="cursor-pointer flex justify-between mainHover"
                  >
                    <span>PHỤ KIỆN</span>
                    <span className="md:text-[14px] md:mx-1">
                      <i className="fa-solid fa-chevron-down"></i>
                    </span>
                  </div>
                  <ul
                    className={`${
                      isDowMenuNam ? "block" : "hidden"
                    } px-2 md:absolute md:h-auto md:bg-white lg:md:shadow-xl md:px-6 md:text-[#353535] md:leading-[3] md:top-[50px] md:left-[56%] hovermenu`}
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

              <Link to={""}>
                <li className="border-t-2 border-gray-50-500 md:border-t-0 md:px-5 md:py-4 hover:md:text-red-950 ">
                  TIN TỨC
                </li>
              </Link>
              <Link to={""}>
                <li className="border-t-2 border-gray-50-500 md:border-t-0 md:px-5 md:py-4 hover:md:text-red-950 ">
                  LIÊN HỆ
                </li>
              </Link>
              <Link to={""}>
                <li
                  onClick={toggleUser}
                  className="cursor-pointer border-t-2 border-gray-50-500 md:border-t-0 md:px-5 md:hidden"
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
