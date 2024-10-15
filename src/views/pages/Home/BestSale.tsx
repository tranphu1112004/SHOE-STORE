const imageBest = [
  {
    url: "/public/poster-quang-cao-giay.jpg",
    buttonBest: "Xem sản phẩm",
    title: "NOWWWW",
    subtitle: "SNEAKER",
  },
  {
    url: "/public/poster-giay-dep-mat.jpg",
    buttonBest: "Xem sản phẩm",
    title: "ZOOOMM",
    subtitle: "SNEAKER",
  },
  {
    url: "/public/lich-su-air-jordan-1-og.jpg",
    buttonBest: "Xem sản phẩm",
    title: "Jodan",
    subtitle: "SNEAKER",
  },
];

const BestSale = () => {
  return (
    <div>
      <div className="text-center  text-black  text-2xl my-4 ">
        <div >
          <p className="text-base font-medium">MONA SNE✭KER</p>
          <h2 className="font-protest-strike font-normal my-3 mx-4 text-3xl md:mx-0 md:text-4xl ">
            CHÚNG TÔI GIÚP BẠN THAY ĐỔI TỪ NHỮNG CÁI NHỎ NHẤT.
          </h2>
          <p className="text-sm font-medium">
            Bước khỏi vùng an toàn để bắt đầu thể hiện phong cách của chính bạn.
          </p>
        </div>
        <button className="px-7 py-3 bg-black text-white mt-7  font-medium">XEM NGAY</button>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 md:mt-5">
        {imageBest.map((image, index) => (
          <div key={index} className=" relative mx-7 my-2 group shadow-white lg:m-0 lg:my-0">
            {" "}
            {/* Sử dụng group để liên kết hover */}
            <img
              src={image.url}
              alt={`best sale ${index}`}
              className="w-full h-[260px] object-cover group-hover:brightness-75 transition duration-300 ease-in-out"
            />{" "}
            {/* Thêm hiệu ứng làm tối ảnh khi hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out hidden lg:flex">
              {/* Chỉ hiện khi hover và trên màn hình lớn */}
              <h2 className="text-2xl font-bold text-white mb-2">
                {image.title}
              </h2>
              <p className="text-sm uppercase text-white tracking-widest">
                {image.subtitle}
              </p>
              <button className="mt-4 bg-black text-white py-2 px-4 hover:bg-opacity-75 transition">
                {image.buttonBest}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSale;
