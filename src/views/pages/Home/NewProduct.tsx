import React, { useContext } from "react";
import { ProductCT } from "../../../context/ProductContext";
import { Link } from "react-router-dom";

const NewProduct: React.FC = () => {
  const productContext = useContext(ProductCT);

  if (!productContext) {
    return <div>Loading...</div>;
  }

  const { products, loading } = productContext;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="mt-16 text-center">
        <Link to={""} >
        <h2 className="font-protest-strike font-normal text-4xl">
          Sản phẩm mới
        </h2>
        </Link>
        <p className="text-sm font-medium mt-2">
          Giày được phân phối chính hãng tại{" "}
          <span className="font-semibold">MONA SNE✭KER</span>
        </p>
      </div>

      <div className="my-5 grid grid-cols-2 lg:grid-cols-4 gap-3  md:grid-cols-2  md:mt-5">
        {products
          // Lọc sản phẩm không hiển thị khi isActive là false
          .filter((product) => product.isActive)
          .map((product, index) => (
            <div key={index} className="relative mx-2- md:mx-0 overflow-hidden">
              <div className="w-full h-auto">
                {/* Hiển thị nhãn Sale nếu sản phẩm đang giảm giá */}
                {product.sale && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Sale
                  </div>
                )}

                <img
                  src={product.imageUrls[0]} 
                  alt={product.name}
                  className="w-full h-[300px] lg:h-[400px] md:h-[400px] object-cover"
                />

                {/* Hiển thị thông báo hết hàng nếu stock bằng 0 */}
                {product.stock === 0 && (
                  <div className="absolute bottom-[55%] right-[35%] bg-gray-500 text-white text-xs px-6 py-3 rounded">
                    Đã hết hàng
                  </div>
                )}
              </div>
              <div className="py-2">
                <p className=" font-semibold lg:md:font-medium text-base">{product.name}</p>
                <p className=" lg:md:font-light text-base">{product.category}</p>

                <div className="flex mt-2">
                  {/* Nếu có giá giảm */}
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
          ))}
      </div>
    </div>
  );
};

export default NewProduct;
