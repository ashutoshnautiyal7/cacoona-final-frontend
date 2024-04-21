import React from "react";

const Section1 = () => {
  return (
    <section className="px-[1.2rem] md:px-[4rem] py-[4rem] bg-gradient-to-t from-[#3FCEE3] via-[#F1D383] to-[#EC9C86] flex flex-col items-center justify-center ">
      <h2 className="font-semibold text-[42px] md:text-[52px] xl:text-[64px] leading-[140%] md:leading-[120.7%] text-center">
        LAUNCHING SOON
      </h2>
      <p className="mt-6 md:mt-10 text-[18px] md:text-[22px] leading-[130%] text-center text-[#515151]">
        Stay tuned for the launch of our website. In the meantime, sign up to
        receive exclusive updates and special offers.
      </p>
      {/* timer */}
      <div className="flex text-[32px] md:text-[75px] xl:text-[90px] leading-[110%] gap-[7px] md:gap-10 xl:gap-16 mt-10 md:mt-16">
        <div className="flex flex-col items-center">
          <span>02</span>
          <span className="text-[13px] md:text-[28px] xl:text-[32px] font-normal mt-[-8px] md:mt-[-28px] xl:mt-[-32px]">
            Days
          </span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>02</span>
          <span className="text-[13px] md:text-[28px] xl:text-[32px] font-normal mt-[-8px] md:mt-[-28px] xl:mt-[-32px]">
            Hours
          </span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>02</span>
          <span className="text-[13px] md:text-[28px] xl:text-[32px] font-normal mt-[-8px] md:mt-[-28px] xl:mt-[-32px]">
            Minutes
          </span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>02</span>
          <span className="text-[13px] md:text-[28px] xl:text-[32px] font-normal mt-[-8px] md:mt-[-28px] xl:mt-[-32px]">
            Seconds
          </span>
        </div>
      </div>
      <form
        action=""
        className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center mt-10"
      >
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your email address"
          className="px-4 md:px-3 py-3 rounded-lg md:rounded-none md:rounded-l-lg focus:outline-none text-[#7F7F7F] max-w-[25rem] h-[2.8rem] md:mr-[-1pxs]"
        />
        <button className="bg-[#4fa2ae] px-7 py-3 rounded-lg md:rounded-none md:rounded-r-lg text-white h-[2.8rem]">
          Get Notified
        </button>
      </form>
    </section>
  );
};

export default Section1;
