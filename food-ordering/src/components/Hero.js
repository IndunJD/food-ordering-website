import React from "react";
import { star, landingimg } from "../assets";
import OrderNow from "./OrderNow";

const Hero = () => (
  <section id="home" className="flex md:flex-row flex-col sm:py-16 pl-6">
    <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[40px] mb-2">
        <img src={star} alt="star" className="w-[24px] h-[24px]" />
        <p className="font-raleway font-normal text-[18px] leading-[30.8px] px-3">
          <span className="font-raleway text-whiteish">
            Fresh and Delicious
          </span>
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-raleway font-bold ss:text-[72px] text-[52px] text-secondary ss:leading-[70px] leading-[75px]">
          Authentic <br className="sm:block hidden" /> Cuisine from <br />
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 mb-3">
          <OrderNow />
        </div>
      </div>

      <h1 className="font-raleway font-bold ss:text-[68px] text-[52px] text-secondary ss:leading-[70px] leading-[75px] w-full">
        Around the <span className="text-gradient">World</span>
      </h1>
      <p className="font-raleway font-normal text-whiteish text-[16px] leading-[30.8px] max-w-470 mt-5">
        Welcome to our restaurant's website, where we bring you the finest
        flavors from diverse culinary traditions around the globe. Indulge in a
        mouthwatering journey as our expert chefs skillfully craft dishes that
        embody the essence of different cultures.
      </p>
    </div>

    <div className="flex-1 flex flex justify-center items-center md:my-0 my-10 relative">
      <img src={landingimg} alt="pizza" className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 orange__gradient" />
    </div>
    <div className="ss:hidden flex justify-center items-center">
      <OrderNow />
    </div>
  </section>
);

export default Hero;
