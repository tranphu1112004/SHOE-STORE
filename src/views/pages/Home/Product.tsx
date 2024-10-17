import React, { useContext } from "react";
import { ProductCT } from "../../../context/ProductContext";
import { Link } from "react-router-dom";

const Product: React.FC = () => {
  const productContext = useContext(ProductCT);

  if (!productContext) {
    return <div>Loading...</div>;
  }

  const { products, loading } = productContext;

  if (loading) {
    return <div>Loading...</div>;
  }

  const newProducts = products
    .filter((product) => product.isActive && product.category !== "Sneakers") 
    .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()) 
    .slice(0, 8); 

  return (
    <div className="w-full mb-10">
      <div className="mt-16 mx-3 lg:md:text-center lg:md:mx-0">
        <h2 className="font-protest-strike relative font-normal text-4xl">
          QUẦN ÁO VÀ PHỤ KIỆN
          <span className="text-lg absolute top-2 left-[218px] lg:md:hidden">
            <i className="fa-solid fa-caret-right bottom-11"></i>
          </span>
        </h2>

        <div className="relative">
          <p className="text-sm font-medium mt-2">
            <span className="font-semibold">MONA SNE✭KER </span>
            nhà phân phối trính hãng của NIKE{" "}
          </p>
          <Link to={''}>
            <div className=" absolute right-0 top-1 max-sm:hidden">
              Xem thêm <i className="text-xs fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </div>
      </div>

      <div className="my-5 grid grid-cols-2 lg:grid-cols-5 gap-1 lg:md:gap-2 md:grid-cols-2 md:mt-5 md:mx-0">
        {newProducts.map((product, index) => (
          <Link to=''>
          <div key={index} className="relative mx-2 md:mx-0 overflow-hidden">
            <div className="w-full h-auto">
              {product.sale && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Sale
                </div>
              )}

              <img
                src={product.imageUrls[0]}
                alt={product.name}
                className=" w-full h-[200px] lg:h-[300px] md:h-[400px] object-cover"
              />

              {product.stock === 0 && (
                <div className="absolute bottom-[55%] px-3 py-2 right-[30%] bg-gray-500 text-white text-xs lg:md:px-6 lg:md:py-3 rounded">
                  Đã hết hàng
                </div>
              )}
            </div>
            <div className="py-2">
              <p className="font-semibold lg:md:font-medium text-base">
                {product.name}
              </p>
              <p className="lg:md:font-light text-base">
                {product.category}
              </p>

              <div className="flex mt-2">
                {product.sale ? (
                  <>
                    <p className="mr-3">
                      <span className="font-medium text-base">
                        {product.pricenew.toLocaleString("vi-VN")}
                      </span>
                      đ
                    </p>
                    <p>
                      <span className="font-medium text-base line-through text-gray-400">
                        {product.price.toLocaleString("vi-VN")}đ
                      </span>
                    </p>
                  </>
                ) : (
                  <p className="font-medium text-base">
                    {product.price.toLocaleString("vi-VN")}đ
                  </p>
                )}
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <p className="text-center text-sm text-gray-400 text-decoration lg:md:hidden">Xem thêm</p>

    </div>
  );
};

export default Product;
