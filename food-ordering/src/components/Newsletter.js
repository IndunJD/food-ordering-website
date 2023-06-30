import React from "react";

const Newsletter = () => (
  <section className="flex justify-center items-center sm:mx-16 mx-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-3xl box-shadow">
    <div className="flex-1 flex flex-col justify-center">
      <h2 className="font-raleway font-semibold xs:text-[36px] text-[22px] text-whiteish w-full">
        Stay in Touch With us!
      </h2>
      <p className="font-raleway font-normal text-whiteish text-[18px] max-w-[400px] mt-5">
        Get Our Promo Code by Subscribing <br className="sm:block hidden" /> to
        our Newsletter{" "}
      </p>
    </div>

    <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
      <button className="font-raleway uppercase sm:flex bg-gradient-to-r from-primary to-secondary text-whiteish text-sm font-semibold py-3 px-8 rounded-lg cursor-pointer">
        Subscribe
      </button>
    </div>
  </section>
);

export default Newsletter;
