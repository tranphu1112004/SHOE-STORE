import React, { useContext, useState } from "react";
import { ProductCT } from "../../../context/ProductContext";
import { Link } from "react-router-dom";

const TshirtList: React.FC = () => {
  const productContext = useContext(ProductCT);

  if (!productContext) {
    return <div>Đang tải...</div>;
  }

  const { products, loading } = productContext;

  if (loading) {
    return <div>Đang tải...</div>;
  }

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const newProducts = products
    .filter((product) => product.isActive && product.category === "Casual" || product.category === "Running")
    .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
    .sort((a, b) => b.quantity - a.quantity);

  const totalPages = Math.ceil(newProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = newProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="w-full">
      <div className="mt-[90px] lg:mt-[160px] mx-3 lg:md:mx-0">
        <h2 className="font-protest-strike relative font-normal text-4xl">
          SẢN PHẨM QUẦN ÁO
        </h2>

        <div className="relative">
          <p className="text-sm font-medium mt-2">
            Sản phẩn được phân phối chính hãng tại{" "}
            <span className="font-semibold">MONA SNE✭KER</span>
          </p>
        </div>
      </div>

      <div className="my-5 grid grid-cols-2 lg:grid-cols-4 md:mb-20 gap-1 lg:md:gap-2 md:grid-cols-2 md:mt-5 md:mx-0">
        {paginatedProducts.map((product, index) => (
          <Link to={`/product/${product.id}`} key={index}>
            <div className="relative mx-2 my-3 md:mx-0 overflow-hidden">
              <div className="w-full h-auto">
                {product.sale && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Sale
                  </div>
                )}

                <img
                  src={product.imageUrls[0]}
                  alt={product.name}
                  className="w-full h-[200px] lg:h-[400px] md:h-[400px] object-cover"
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
                <p className="lg:md:font-light text-base">{product.category}</p>

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

      {/* Conditional rendering for pagination */}
      {newProducts.length > itemsPerPage && (
        <div className="flex justify-center items-center my-9">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
          >
            Trước
          </button>
          <span className="text-sm">Trang {currentPage} / {totalPages}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
          >
            Sau
          </button>
        </div>
      )}
    </div>
  );
};

export default TshirtList;
