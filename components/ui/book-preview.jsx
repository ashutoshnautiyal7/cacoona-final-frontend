import React from "react";

const Preview = ({ backgroundImage, data }) => {
  console.log("the data in the preview page is : ", data);

  return (
    <section
      className="text-black w-[18.5rem] sm:w-[37rem] md:w-[44.5rem] lg:w-[55rem] h-[14.5rem] sm:h-[29rem] md:h-[34rem] lg:h-[42rem] bg-no-repeat bg-contain flex items-center justify-center text-[12px] sm:text-[18px] md:text-[22px] font-medium p-10"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center lg:mb-14">
        <div className="flex gap-1">
          <span>Hobies / Interests:</span>
          <span>{data?.hobbies}</span>
        </div>
        <div className="flex sm:gap-0.5 lg:gap-8 mt-2 sm:mt-6 lg:mt-8 flex-col lg:flex-row">
          <div className="flex flex-col  min-w-[7rem] sm:gap-0.5">
            <div className="flex gap-1">
              <span>I WORK BEST WHEN::</span>
              <span>{data?.workbest}</span>
            </div>
            <div className="flex gap-1">
              <span>I WORK MY BEST WITH::</span>
              <span>{data?.bestwith}</span>
            </div>
            <div className="flex gap-1">
              <span>I AM MOST ENCOURAGED BY::</span>
              <span>{data?.encouraged}</span>
            </div>
          </div>
          <div className="flex flex-col sm:gap-0.5">
            <div className="flex gap-1">
              <span>MORE ABOUT ME:</span>
              <span>{data?.about}</span>
            </div>
            <div className="flex gap-1">
              <span>Last time learned something new about yourself?</span>
              <span>{data?.lasttime}</span>
            </div>
            <div className="flex gap-1">
              <span>Preferred method of learning:</span>
              <span>{data?.methodof}</span>
            </div>
            <div className="flex gap-1">
              <span>Belief about yourself:</span>
              <span>{data?.believe}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
