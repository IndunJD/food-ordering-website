import { dishes } from "../constants";

const Popular = () => {
  return (
    <section className="my-[70px] md:my-[150px]">
      <div className="container mx-auto">
        {/* text */}
        <p className="font-licorice flex justify-end items-center text-whiteish mb-[-35px] text-[30px] mx-auto">
          Our most
        </p>
        <h2 className="font-raleway flex justify-end items-center text-secondary font-bold text-[52px] mb-6 md:mb-12">
          Popular Dishes
        </h2>
      </div>
      <div class="flex items-center justify-center">
        <div class="grid grid-cols-1 gap-[10px] md:grid-cols-3">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="mx-auto flex justify-start items-center flex-col"
            >
              <div class="relative mx-auto">
                <div class="absolute  w-full bottom-5 text-white text-justify p-4">
                  <h3 className="font-raleway font-medium text-whiteish text-xl px-2 py-1">
                    {dish.title}
                  </h3>
                  <p className="text-[32px] mb-4 font-raleway font-bold text-whiteish px-2 py-1">
                    {dish.price}
                  </p>
                </div>
                <img src={dish.img} alt="" className="w-[436px] h-[588px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="font-raleway uppercase sm:flex bg-gradient-to-r from-primary to-secondary text-whiteish text-sm font-semibold py-2 px-6 rounded-lg cursor-pointer">View Menu</button>
      </div>
    </section>
  );
};

export default Popular;
