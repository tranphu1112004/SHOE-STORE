import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    url: "../../../../public/poster-giay-den.jpg",
    title: "MONA SNE✭KER",
    description: "Chào mừng bạn đến với ngôi nhà Nike! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Nike 100 năm, và đang không ngừng phát triển lớn mạnh.",
    h2banner:"text-3xl font-bold",
    pbanner:""
  },
  {
    url: "../../../../public/poster-giay-just-do-it.jpg",
    title: "MONA SNE✭KER",
    description: "Chào mừng bạn đến với ngôi nhà Nike! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Nike 100 năm, và đang không ngừng phát triển lớn mạnh. ",
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
          <div key={index} className="relative w-full lg:h-[500px] md:h-[350px] ">
            <img src={image.url} alt={image.title} className="w-full h-[350px] md:h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center lg:items-start lg:justify-start bg-black bg-opacity-5 text-white p-6">
              <h2 className="text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-center lg:text-left lg:absolute lg:left-[5%] lg:top-[50%]">
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
