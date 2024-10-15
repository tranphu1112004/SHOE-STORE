import React from 'react'
import CustomSlider from './CustomSlider'
import BestSale from './BestSale';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Slider section */}
      <div className="flex-grow my-4 w-full mx-auto md:my-11">
        <CustomSlider />
        <BestSale/>
      </div>
    </div>
  )
}

export default Home;