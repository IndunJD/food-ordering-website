import { testimonials } from "../constants"
import ReviewCard from './ReviewCard'

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
      <div className="flex md:flex-row flex-col relative sm:py-16 py-6">
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] orange__gradient" />

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          {testimonials.map((card) => (
            <ReviewCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
