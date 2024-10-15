import React from 'react';


const FooterPage = () => {
  return (
    <footer className="bg-black w-full text-white py-10">
      <div className="container  px-6 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-28 md:mx-auto md:px-0">
        
        {/* Giới thiệu */}
        <div>
          <h3 className="text-xl font-bold mb-2 border-b-2 border-red-600 inline-block">GIỚI THIỆU</h3>
          <p className="text-gray-400 text-sm">
            Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2 border-b-2 border-red-600 inline-block">MENU</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-red-600">Trang chủ</a></li>
            <li><a href="#" className="hover:text-red-600">Cửa hàng</a></li>
            <li><a href="#" className="hover:text-red-600">Liên hệ</a></li>
            <li><a href="#" className="hover:text-red-600">Giới thiệu</a></li>
            <li><a href="#" className="hover:text-red-600">Tin tức</a></li>
          </ul>
        </div>
        {/* Địa chỉ */}
        <div>
          <h3 className="text-xl font-bold mb-2 border-b-2 border-red-600 inline-block">ĐỊA CHỈ</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><i className="fa fa-map-marker-alt mr-2"></i> Phương Canh, Nam Từ Liêm, Hà Nội</li>
            <li><i className="fa fa-phone mr-2"></i> 0961162906</li>
            <li><i className="fa fa-envelope mr-2"></i> anhphu11124@gmail.com</li>
          </ul>
        </div>

        {/* Menu */}
        

        {/* Mạng xã hội */}
        <div className=''>
          <h3 className="text-xl font-bold mb-2 border-b-2 border-red-600 inline-block">MẠNG XÃ HỘI</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-red-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-red-600"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-red-600"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-red-600"><i className="fab fa-pinterest"></i></a>
            <a href="#" className="text-gray-400 hover:text-red-600"><i className="fas fa-rss"></i></a>
          </div>
        </div>
      </div>

      {/* Đăng ký nhận thông tin */}
      <div className="mt-10">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">ĐĂNG KÝ NHẬN THÔNG TIN</h3>
          <div className="flex justify-center">
            <input type="email" placeholder="Email..." className="p-2 rounded-l-lg w-1/3 text-black"/>
            <button className="bg-red-600 text-white p-2 rounded-r-lg">ĐĂNG KÝ</button>
          </div>
        </div>
      </div>

      {/* Thông tin bản quyền */}
      <div className="container mx-auto mt-8 text-center text-gray-500 text-sm">
        <div className="flex justify-center space-x-4">
          <p className='text-[35px]'>
          <i className="fa-brands fa-cc-paypal"></i>
          </p>
          <p className='text-[35px]'>
          <i className="fa-brands fa-cc-visa"></i>
          </p>
          <p className='text-[35px]'>
          <i className="fa-brands fa-cc-mastercard"></i>
          </p>
          <p className='text-[35px]'>
          <i className="fa-brands fa-cc-amazon-pay"></i>
          </p>
        </div>
        <p className="mt-4">Dự án thực tập <a href="#" className="text-red-600">Trần Hữu Phú</a></p>
      </div>
    </footer>
  )
}

export default FooterPage;
