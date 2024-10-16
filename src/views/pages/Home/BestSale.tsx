const imageBest = [
  {
    url: "../../../../public/1c4e5726282595.56353bd8e1179.jpg",
    buttonBest: "Xem sản phẩm",
    title: "Nike Air Zoom",
    subtitle: "Trải nghiệm đỉnh cao trong mỗi bước đi với Giày Nike Air Zoom. Với công nghệ đệm Air tiên tiến, đôi giày này giúp bạn tự tin vượt qua mọi thử thách. Thiết kế hiện đại với màu sắc nổi bật sẽ làm bạn nổi bật trên sân cỏ và phố phường. Just Do It!",
  },
  {
    url: "/public/poster-giay-dep-mat.jpg",
    buttonBest: "Xem sản phẩm",
    title: "Nike Zoom",
    subtitle: "Chạy nhanh hơn và xa hơn với giày Nike Zoom! Được trang bị công nghệ đệm Zoom Air tiên tiến, giày mang lại độ phản hồi và tốc độ tối ưu, lý tưởng cho những buổi tập luyện và thi đấu.",
  },
  {
    url: "/public/lich-su-air-jordan-1-og.jpg",
    buttonBest: "Xem sản phẩm",
    title: "JAir Jordan 1",
    subtitle: "Đứng đầu bảng trong danh sách giày thể thao, Air Jordan 1 không chỉ là một đôi giày mà còn là biểu tượng văn hóa. Với thiết kế cổ điển và sự kết hợp màu sắc độc đáo, đôi giày này sẽ nâng tầm phong cách của bạn lên một tầm cao mới.",
  },
];

const BestSale = () => {
  return (
    <div>
      <div className="text-center  text-black  text-2xl my-9 ">
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

      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4  md:mt-5">
        {imageBest.map((image, index) => (
          <div key={index} className=" rounded-md relative mx-7 my-2  group shadow-white lg:m-0 lg:my-0">
            {" "}
            {/* Sử dụng group để liên kết hover */}
            <img
              src={image.url}
              alt={`best sale ${index}`}
              className="w-full h-[350px] object-cover group-hover:brightness-75 transition duration-300 ease-in-out md:h-[650px]"
            />{" "}
            {/* Thêm hiệu ứng làm tối ảnh khi hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-25 md:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out md:hidden  lg:flex">
              {/* Chỉ hiện khi hover và trên màn hình lớn */}
              <h2 className="text-2xl font-bold text-white mb-2">
                {image.title}
              </h2>
              <p className="text-sm w-2/3 text-white tracking-widest">
                {image.subtitle}
              </p>
              <button className="mt-10 bg-black text-white py-4 font-semibold px-8  hover:bg-opacity-75 transition">
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
