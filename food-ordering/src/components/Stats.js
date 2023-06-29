import { stats } from "../constants";

const Stats = () => (
  <div className="bg-darkish rounded-3xl p-4 flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6">
    {stats.map((stat) => (
      <div
        key={stat.id}
        className="mx-auto flex justify-start items-center flex-col"
      >
        <h4 className="font-raleway font-bold xs:text-[80px] text-[30px] xs:leading-[82px] leading-[60px] text-gradient tracking-tighter">
          {stat.value}
        </h4>
        <p className="font-raleway font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-whiteish ml-3 flex justify-between items-center">
          {stat.title}
        </p>
      </div>
    ))}
  </div>
);

export default Stats;
