import React from "react";
import { quote } from "../assets";

const ReviewCard = ({ content, name, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-3xl max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quote}
      alt="quotes"
      className="w-[50px] h-[50px] object-contain"
    />
    <p className="font-raleway font-normal text-[18px] text-whiteish my-5">
      {content}
    </p>
    <div className="flex flex-row items-center">
      <img src={img} alt={name} className="w-[48px] h-[48px]" />
      <div className="flex flex-col ml-4">
        <h4 className="font-raleway font-medium text-[20px] text-whiteish my-10">
          {name}
        </h4>
      </div>
    </div>
  </div>
);

export default ReviewCard;
