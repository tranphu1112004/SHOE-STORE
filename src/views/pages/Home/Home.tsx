import  { useRef } from 'react';
import CustomSlider from './CustomSlider';
import BestSale from './BestSale';
import NewProduct from './NewProduct';
import BestSellingProducts from './bestSellingProducts';
import Trending from './Trending';
import Product from './Product';
import UpSale from './UpSale';

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
    <div className="min-h-screen flex flex-col mt-[85px] flex-grow md:mt-[140px]">
      <UpSale/>
      <div className="flex-grow my-4 w-full mx-auto md:my-3">
        <CustomSlider />
        <BestSale scrollToBestProducts={handleScrollToBestProducts} />
        <Trending />
        <div ref={bestProductsRef}>
          <BestSellingProducts />
        </div>
        <NewProduct />
        <Product/>
      </div>
    </div>
  );
};

export default Home;
