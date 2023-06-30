import React from "react";
import { logo, facebook, instagram, twitter, linkedin } from "../assets"

const Footer = () => (
  <section className="flex justify-center items-center sm:py-16 py-6 flex-col">
    <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="gourmet" className="h-[64px] object-contain" />
        <p className="font-raleway font-normal text-whiteish text-[16px] max-w-[310px] mt-4">
          At GOURMET, we are passionate about food. With years of culinary
          expertise and a deep appreciation for global gastronomy, we strive to
          deliver an unforgettable dining experience.
        </p>
      </div>

      <div className="flex-1 w-full flex justify-center items-center flex-wrap md:mt-0 mt-10">
        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          {/* <h4 className="font-raleway font-medium text-[18px] leading-[27px] text-whiteish">
            Usefull Links
          </h4> */}
        </div>
        <ul className="">
          <li className="font-raleway font-normal text-[16px] leading-[24px] text-whiteish hover:text-secondary cursor-pointer">
            Home
          </li>
          <li className="font-raleway font-normal text-[16px] leading-[24px] text-whiteish hover:text-secondary cursor-pointer">
            About Us
          </li>
          <li className="font-raleway font-normal text-[16px] leading-[24px] text-whiteish hover:text-secondary cursor-pointer">
            Menu
          </li>
          <li className="font-raleway font-normal text-[16px] leading-[24px] text-whiteish hover:text-secondary cursor-pointer">
            Contact Us
          </li>
          <li className="font-raleway font-normal text-[16px] leading-[24px] text-whiteish hover:text-secondary cursor-pointer">
            Newsletter
          </li>
        </ul>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-raleway font-medium text-center text-[12px] leading-[27px] text-whiteish">
        Copyrights © GOURMET 2023 All Rights Reserved
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        <img
          src={facebook}
          alt="facebook"
          className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
        />
        <img
          src={instagram}
          alt="instagram"
          className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
        />
        <img
          src={twitter}
          alt="twitter"
          className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
        />
        <img
          src={linkedin}
          alt="linkedin"
          className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
        />
      </div>
    </div>
  </section>
);

export default Footer;
