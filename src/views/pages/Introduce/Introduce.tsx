
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-start gap-10  md:w-5/6">
      {/* Icon */}
      <div className="text-red-600 text-4xl">
        <i className={icon}></i>
      </div>
      {/* Text */}
      <div >
        <h3 className="text-lg mb-2 font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Introduce = () => {
  return (
    <div className="mb-16 mx-2 mt-[100px] lg:md:mt-40 lg:md:mx-0  md:mb-14">
      {/* <Banner/> */}
      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row  mb-12">
        {/* Image */}

        {/* Description */}
        <div className="md:w-5/6 mb-12 text-center md:text-left  md:mb-14">
          <h2 className="text-3xl font-protest-strike  font-medium text-gray-800 mb-4">
            GIỚI THIỆU MONA SNE✭KER
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Chào mừng bạn đến với{" "}
            <span className="font-medium">Mona Sne✭ker</span>, một trong những
            địa chỉ uy tín hàng đầu chuyên cung cấp các sản phẩm giày và phụ
            kiện thời trang cao cấp. Tại{" "}
            <span className="font-medium">Mona Sne✭ker</span>, chúng tôi tập
            trung vào việc mang đến cho khách hàng những sản phẩm chất lượng từ
            thương hiệu Nike – nhãn hiệu thể thao hàng đầu thế giới.
          </p>
          <div className="flex flex-col  w-full gap-10 text-base md:flex-row">
            <div className="">
              <h3 className="text-xl font-medium text-gray-800 mb-6 font-protest-strike  ">
                Sản Phẩm Đa Dạng và Chất Lượng
              </h3>
              <p className=" text-gray-600 text-left">
                Mona Sne✭ker tự hào cung cấp các mẫu giày Nike mới nhất, từ
                những dòng giày chạy bộ, giày tập luyện cho đến những mẫu
                sneaker thời trang đang được ưa chuộng. Mỗi sản phẩm tại cửa
                hàng chúng tôi đều được chọn lọc kỹ lưỡng, cam kết là hàng chính
                hãng với chất lượng vượt trội. Ngoài giày dép, Mona Sne✭ker còn
                cung cấp các loại phụ kiện thời trang như quần áo, balo, nón,
                tất, và nhiều phụ kiện khác từ Nike, giúp bạn hoàn thiện phong
                cách thể thao, năng động.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 font-protest-strike  ">
                Trải Nghiệm Mua Sắm Tuyệt Vời
              </h3>
              <p className=" text-gray-600 text-left">
                Với đội ngũ nhân viên nhiệt tình, giàu kinh nghiệm, Mona Sne✭ker
                không chỉ mang đến cho bạn những sản phẩm tốt nhất mà còn đảm
                bảo một dịch vụ khách hàng chuyên nghiệp. Chúng tôi hiểu rằng
                việc chọn lựa một đôi giày hay một bộ quần áo phù hợp không chỉ
                là về kích thước mà còn là về phong cách và sự thoải mái. Vì
                vậy, chúng tôi luôn sẵn sàng hỗ trợ và tư vấn tận tình để giúp
                bạn tìm được sản phẩm ưng ý nhất.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 h-[200px]  md:h-[600px] md:ml-16    md:mb-0">
          <img
            src="../../../../public/fa4596ad9a9d39901eeb455ed4f74e44.jpg"
            alt="Product Image"
            className="w-full  h-[200px] md:h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid my-10 grid-cols-1 md:grid-cols-2 gap-8 ">
        <FeatureCard
          icon="fas fa-shipping-fast"
          title="Miễn phí giao hàng"
          description="Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh

"
        />
        <FeatureCard
          icon="fas fa-exchange-alt"
          title="Đổi trả trong vòng 7 ngày"
          description="Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh

"
        />
        <FeatureCard
          icon="fas fa-certificate"
          title="Sản phẩm mới 100%"
          description="Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh

"
        />
        <FeatureCard
          icon="fas fa-headset"
          title="Chăm sóc khách hàng"
          description="Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh

"
        />
        <FeatureCard
          icon="fas fa-shield-alt"
          title="Hàng chính hãng"
          description="Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh

"
        />
        <FeatureCard
          icon="fas fa-credit-card"
          title="Thanh toán đa dạng"
          description="Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh

"
        />
      </div>
    </div>
  );
};

export default Introduce;
