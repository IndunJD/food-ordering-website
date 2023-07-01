import { features } from "../constants";

const Serve = () => {
  return (
    <section className="my-[70px] md:my-[150px]">
      <div className="container mx-auto">
        {/* text */}
        <p className="font-licorice text-whiteish mb-[-35px] text-[30px] mx-auto">
          What we serve
        </p>
        <h2 className="font-raleway text-secondary font-bold text-[52px] mb-6 md:mb-12">
          We Serve Passion
        </h2>
      </div>
      {/* Feature list */}
      <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="mx-auto flex justify-start items-center flex-col"
          >
            <div className="w-full bg-darkish rounded-3xl drop-shadow-3xl max-w-[530px] h-[360px] relative flex flex-col items-center justify-center md:flex-row md:justify-start mx-auto p-[50px]">
              {/* Background Image */}
              <div className="md:flex absolute top-0 right-0 -z-10">
                <img src={feature.bg} alt="" />
              </div>

              {/* Image Icons */}
              <div className="max-w-[120px] ml-[-100px] md:mr-7 md:max-w-[230px]">
                <img src={feature.img} alt="" className="" />
              </div>

              {/* Text */}
              <div className="max-w-[220px]">
                <h3 className="text-[32px] mb-4 font-raleway font-medium text-secondary">
                  {feature.title}
                </h3>
                <p className="font-raleway font-light text-whiteish gap-x-2">
                  {feature.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Serve;
