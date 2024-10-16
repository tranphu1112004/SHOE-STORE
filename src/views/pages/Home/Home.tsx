import React, { useRef } from 'react';
import CustomSlider from './CustomSlider';
import BestSale from './BestSale';
import NewProduct from './NewProduct';
import BestProducts from './bestSellingProducts';
import Trending from './Trending';

const Home = () => {
  const bestProductsRef = useRef<HTMLDivElement>(null);

  const handleScrollToBestProducts = () => {
    if (bestProductsRef.current) {
      const topPosition = bestProductsRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPosition - 150, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow my-4 w-full mx-auto md:my-3">
        <CustomSlider />
        <BestSale scrollToBestProducts={handleScrollToBestProducts} />
        <Trending />
        <div ref={bestProductsRef}>
          <BestProducts />
        </div>
        <NewProduct />
      </div>
    </div>
  );
};

export default Home;
