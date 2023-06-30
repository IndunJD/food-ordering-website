import React from "react";
import { foodMenu } from "../constants";

const FoodCard = ({ activeID, setShowModal }) => {
  const menu = foodMenu.find((menu) => foodMenu.id === activeID);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-blackish bg-opacity-50">
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-whiteish rounded-2xl transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img src={menu.img} alt="" className="rounded-xl" />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl font-raleway text-darkish font-[700] my-5">
            {menu.title}
          </h2>
          <p className="text-[15px] font-raleway text-darkish">
            {menu.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-secondary font-raleway text-[24px] font-bold mb-5">
              {menu.prize}
            </h4>
          </div>

          <button className="font-raleway uppercase sm:flex hidden bg-gradient-to-r from-primary to-secondary text-whiteish text-sm font-semibold py-2 px-6 rounded-lg cursor-pointer">
            order
          </button>
        </div>

        <button onClick={() => setShowModal(false)} className="w-[1.8rem] h-[1.8rem] bg-whiteish absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-md leading-0 cursor-pointer">&times;</button>
      </div>
    </div>
  );
};

export default FoodCard;
