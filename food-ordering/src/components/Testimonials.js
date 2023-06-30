import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="my-[70px] md:my-[150px]">
      <div className="container mx-auto">
        {/* text */}
        <p className="font-licorice flex justify-end items-center text-whiteish mb-[-35px] text-[30px] mx-auto">
          Happy Customers
        </p>
        <h2 className="font-raleway flex justify-end items-center text-secondary font-bold text-[52px] mb-6 md:mb-12">
          Testimonials
        </h2>
      </div>
      <div class="flex items-center justify-center">
        <div class="grid grid-cols-1 gap-[10px] md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mx-auto flex justify-start items-center flex-col"
            >
              <div class="relative mx-auto">
                <div class="absolute  w-full bottom-5 text-white text-justify p-4">
                  <h3 className="font-raleway font-medium text-whiteish text-xl px-2 py-1">
                    {testimonial.title}
                  </h3>
                  <p className="text-[32px] mb-4 font-raleway font-bold text-whiteish px-2 py-1">
                    {testimonial.price}
                  </p>
                </div>
                <img src={testimonial.img} alt="" className="w-[70px] h-[70px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
