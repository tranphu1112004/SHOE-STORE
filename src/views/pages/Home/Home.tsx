import React from 'react'
import CustomSlider from './CustomSlider'
import BestSale from './BestSale';
import NewProduct from './NewProduct';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow my-4 w-full mx-auto md:my-3">
        <CustomSlider />
        <BestSale/>
        <NewProduct/>
      </div>
    </div>
  )
}

export default Home;