import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    url: "../../../../public/poster-giay-den.jpg",
    title: "MONA SNE✭KER",
    description: "Chạy nhanh hơn và xa hơn với giày Nike Zoom! Được trang bị công nghệ đệm Zoom Air tiên tiến, giày mang lại độ phản hồi và tốc độ tối ưu, lý tưởng cho những buổi tập luyện và thi đấu.",
  },
  {
    url: "../../../../public/nike_shoe_in_background_of_banner_hd_nike.jpg",
    title: "MONA SNE✭KER",
    description: "Thêm phần cá tính cho tủ giày của bạn với Nike Dunk! Với thiết kế trẻ trung và đa dạng màu sắc, đây là lựa chọn hoàn hảo cho những tín đồ yêu thích phong cách streetwear.",
  },
  {
    url: "../../../../public/058ca55eae5b86fa8a4d52c1d1e5a4a4.jpg",
    title: "MONA SNE✭KER",
    description: "Trải nghiệm sự kết hợp hoàn hảo giữa phong cách và hiệu suất với giày Nike Air Max. Với thiết kế đế khí độc đáo và chất liệu thoáng khí, đôi giày này sẽ mang lại sự thoải mái tối ưu cho mỗi bước đi của bạn!",
  },
];

const CustomSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="relative">
      
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full  md:h-[200px] lg:h-[300px]">
            <img src={image.url} alt={image.title} className="w-full h-[350px] md:h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center lg:items-start lg:justify-start bg-black bg-opacity-40 text-white p-6">
              <h2 className="text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-center lg:text-left lg:absolute lg:left-[5%] lg:top-[53%]">
                {image.title}
              </h2>
              <p className="text-xs md:text-base lg:text-base xl:text-lg text-center mt-1 w-[90%] md:w-[80%] lg:w-[45%] lg:absolute lg:left-[5%] lg:top-[65%] lg:text-left">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
  
}

export default CustomSlider;
