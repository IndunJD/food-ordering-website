import React from "react";
import { arrow } from "../assets";

const OrderNow = () => (
  <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-orange-gradient p-[2px] cursor-pointer">
    <div className="flex justify-center items-center flex-col bg-blackish w-[100%] h-[100%] rounded-full">
      <p className="font-raleway font-medium text-[18px] leading-[23px] tracking-wider">
        <span className="text-gradient uppercase">Order</span>
      </p>

      <div className="flex justify-center items-start flex-row">
        <p className="font-raleway font-medium text-[18px] leading-[23px] tracking-wider">
          <span className="text-gradient uppercase">Now</span>
        </p>
        <img
          src={arrow}
          alt="arrow"
          className="w-[16px] h-[17px] object-contain"
        />
      </div>
    </div>
  </div>
);

export default OrderNow;
