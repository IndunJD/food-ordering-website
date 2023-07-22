import React from "react";
import { cheficon, chef } from "../assets";

const Chefs = () => {
  return (
    <section id="features" className="my-[70px] md:my-[150px]">
      <div className="container mx-auto">
        {/* text */}
        <p className="font-licorice flex justify-start items-center text-whiteish mb-[-35px] text-[30px] mx-auto">
          Meet the experts
        </p>
        <h2 className="font-raleway flex justify-start items-center text-secondary font-bold text-[52px] mb-6 md:mb-12">
          Our Chefs
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center flex-col">
          <p className="font-raleway font-normal text-whiteish text-[18px] leading-[20.8px] max-w-470px">
            Our team of expert chefs is the foundation of our culinary mastery.
            With unmatched expertise and unwavering dedication, they create
            dishes that showcase their culinary artistry.
          </p>
          <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-5 relative flex-col">
            <div className="flex flex-row-6 justify-start rounded-3xl mb-6 feature-card">
              <div className="w-[64px] h-[64px] rounded-3xl flex justify-center items-center bg-dimOrange">
                <img
                  src={cheficon}
                  alt="icon"
                  className="w-[50%] h-[50%] object contain"
                />
              </div>
              <div className="flex-1 flex justify-center flex-col ml-3">
                <h4 className="font-raleway text-whiteish text-[16px] leading-[23px] pr-4">
                Years of Experience and Training: Your team of expert chefs has accumulated years of experience and undergone extensive training in various culinary techniques and cuisines
                </h4>
              </div>
            </div>

            <div className="flex flex-row-6 justify-start rounded-3xl mb-6 feature-card">
              <div className="w-[64px] h-[64px] rounded-3xl flex justify-center items-center bg-dimOrange">
                <img
                  src={cheficon}
                  alt="icon"
                  className="w-[50%] h-[50%] object contain"
                />
              </div>
              <div className="flex-1 flex justify-center flex-col ml-3">
                <h4 className="font-raleway text-whiteish text-[16px] leading-[23px] pr-4">
                Creativity and Innovation: They embrace innovation and are not afraid to experiment with new ingredients and cooking styles, leading to unique and extraordinary dishes that showcase their artistry
                </h4>
              </div>
            </div>

            <div className="flex flex-row-6 justify-start rounded-3xl mb-6 feature-card">
              <div className="w-[64px] h-[64px] rounded-3xl flex justify-center items-center bg-dimOrange">
                <img
                  src={cheficon}
                  alt="icon"
                  className="w-[50%] h-[50%] object contain"
                />
              </div>
              <div className="flex-1 flex justify-center flex-col ml-3">
                <h4 className="font-raleway text-whiteish text-[16px] leading-[23px] pr-4">
                Attention to Detail: The team's unwavering dedication to their craft is evident in their meticulous attention to detail
                </h4>
              </div>
            </div>

            <div className="flex flex-row-6 justify-start rounded-3xl mb-6 feature-card">
              <div className="w-[64px] h-[64px] rounded-3xl flex justify-center items-center bg-dimOrange">
                <img
                  src={cheficon}
                  alt="icon"
                  className="w-[50%] h-[50%] object contain"
                />
              </div>
              <div className="flex-1 flex justify-center flex-col ml-3">
                <h4 className="font-raleway text-whiteish text-[16px] leading-[23px] pr-4">
                Consistency and Excellence: Your team of expert chefs consistently delivers excellence in their culinary creations. Regardless of the occasion or the number of diners, they maintain high standards and strive for perfection in each dish they serve
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-end flex-col">
          <img src={chef} alt="chef" className="object contain" />
        </div>
      </div>
    </section>
  );
};

export default Chefs;
