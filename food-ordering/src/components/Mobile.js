import React from "react";
import { mobile, apple, google } from "../assets";

const Mobile = () => {
  return (
    <section className="my-[70px] md:my-[150px]">
      <div className="container mx-auto">
        {/* text */}
        <p className="font-licorice flex justify-start items-center text-whiteish mb-[-35px] text-[30px] mx-auto">
          Just a fingertip away
        </p>
        <h2 className="font-raleway flex justify-start items-center text-secondary font-bold text-[52px] mb-6 md:mb-12">
          Available on mobile
        </h2>
      </div>
      <div className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
        <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
          <img
            src={mobile}
            alt=""
            className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded orange__gradient" />
        </div>

        <div className="flex-1 flex justify-center items-start flex-col">
          <h2 className="font-raleway font-semibold xs:text-[36px] text-[22px] text-whiteish w-full">
            Embark on a seamless culinary <br className="sm:block hidden" />{" "}
            journey wherever you are!
          </h2>
          <p className="font-raleway font-normal text-whiteish text-[18px] max-w-[400px] mt-5">
            Experience the convenience of browsing our menu, placing orders, and
            exploring our culinary offerings, all from the comfort of your
            smartphone or tablet. Whether you're craving our signature dishes,
            looking to try something new, or simply want to stay updated with
            our latest promotions, our mobile app has got you covered
          </p>

          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} alt="apple-pay" className="w-[128px] h-[42px] object-contain mr-3 cursor-pointer" />
            <img src={google} alt="google-pay" className="w-[128px] h-[45px] object-contain cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
