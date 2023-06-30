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
          <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
            <div className="flex flex-row-6 justify-start rounded-3xl mb-6 feature-card">
              <div className="w-[64px] h-[64px] rounded-3xl flex justify-center items-center bg-dimOrange">
                <img
                  src={cheficon}
                  alt="icon"
                  className="w-[50%] h-[50%] object contain"
                />
              </div>
              <div className="flex-1 flex justify-center flex-col ml-3">
                <h4 className="font-raleway text-whiteish text-[18px] leading-[23px] pr-4">
                  Our team of expert chefs: Masters of culinary craft asdss asdf
                  sdfasdf
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
                <h4 className="font-raleway text-whiteish text-[18px] leading-[23px] pr-4">
                  Unique skills and deep passion for cooking craft asdss asdf
                  sdfasdf
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
                <h4 className="font-raleway text-whiteish text-[18px] leading-[23px] pr-4">
                  Remarkable flavor combinations and stunning presentations
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
                <h4 className="font-raleway text-whiteish text-[18px] leading-[23px] pr-4">
                  Infusing creativity and expertise into every dish craft asdss
                  asdf sdfasdf
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
