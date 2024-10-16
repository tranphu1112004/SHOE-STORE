import React from 'react';
import { Link } from 'react-router-dom';

const TrendingBanner = [
  {
    image: '../../../../public/e324906d9c8a3b0439753b2fc958f83c.jpg',
    name: 'Nike Killshot 2 Leather',
    title: 'Inspired by our original tennis shoe, the Killshot 2 brings a fresh update with classic colours and a variety of textured leathers. To prove youre on top, the rubber gum sole adds the cherry on the bottom. You get courtside attitude with a modern touch.',
    link: '/product/1', 
    buttonT: 'MUA NGAY',
  },
];

const Trending = () => {
  return (
    <div className='mb-10 mx-2 lg:md:mx-0'>
      <hr className='my-7 w-[70%] mx-auto' />
      <div className='my-14 lg:md:my-10'>
        <div className="lg:md:text-center text-black text-2xl">
          <div>
            <h2 className="font-protest-strike font-normal my-2 text-4xl lg:md:my-0 md:mx-0 md:text-4xl">
              ĐÁNG CHÚ Ý
            </h2>
            <p className="text-sm font-medium mb-4 ">
              Hãy khám phá và trải nghiệm ngay để tận hưởng sự khác biệt mà <span className="font-semibold">MONA SNE✭KER</span> mang lại!
            </p>
          </div>
        </div>
        <div className='w-full h-[400px] relative'>
          {TrendingBanner.map((item, index) => (
            <div key={index} className="relative w-full h-[450px] mb-4">
              <div className="absolute  bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300"></div>
              <img className='w-full h-[400px] object-cover' src={item.image} alt={item.title} />
              
              {/* Nội dung trên ảnh */}
              <div className="absolute inset-0 flex flex-col top-[20%] items-center lg:md:items-start lg:md:w-2/4 md:lg:left-[60%] text-white">
                <h3 className="text-3xl font-bold mb-4">{item.name}</h3>
                <p className="text-xs text-center w-3/4 text-white tracking-widest mb-8 lg:md:text-left">{item.title}</p>
                <Link to={item.link} className="bg-red-600 px-10 py-2  text-white hover:bg-red-700 transition-colors duration-300">
                  {item.buttonT}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
