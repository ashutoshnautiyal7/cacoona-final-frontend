import React from "react";

const Preview = ({ backgroundImage, data }) => {
  console.log("the data in the preview page is : ", data);

  return (
    <section
      className="text-black w-[18.5rem] sm:w-[37rem] md:w-[44.5rem] lg:w-[49.47rem] h-[14.5rem] sm:h-[29rem] md:h-[34rem] lg:h-[38.05rem] bg-no-repeat bg-contain flex items-center justify-center text-[6px] sm:text-[12px] md:text-[14px] lg:text-[17px] font-medium p-10 mt-2"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col mt-2 sm:mt-6 lg:mt-8 gap-2 w-full">
          <div className="flex items-start">
            <span className="font-semibold w-24 sm:w-36 lg:w-48">
              Hobbies / Interests
            </span>
            <span className="mr-3">:</span>
            <span>{data?.hobbies}</span>
          </div>

          <div className="flex items-start">
            <span className="font-semibold w-24 sm:w-36 lg:w-48">
              I work best when
            </span>
            <span className="mr-3">:</span>
            <span>{data?.workbest}</span>
          </div>

          <div className="flex items-start">
            <span className="font-semibold w-24 sm:w-36 lg:w-48">
              I work my best with
            </span>
            <span className="mr-3">:</span>
            <span>{data?.bestwith}</span>
          </div>

          <div className="flex items-start">
            <span className="font-semibold w-24 sm:w-36 lg:w-48">
              I am most encouraged by
            </span>
            <span className="mr-3">:</span>

            <span>{data?.encouraged}</span>
          </div>

          <div className="flex items-start">
            <span className="font-semibold w-24 sm:w-36 lg:w-48">
              More about me
            </span>
            <span className="mr-3">:</span>
            <span>{data?.about}</span>
          </div>

          <div className="flex items-start">
            <span className="font-semibold w-24 sm:w-36 lg:w-48">
              Last time learned something new
            </span>
            <span className="mr-3">:</span>
            <span>{data?.lasttime}</span>
          </div>

          <div className="flex items-start">
            <span className="font-semibold w-24 sm:w-36 lg:w-48">
              Preferred method of learning
            </span>
            <span className="mr-3">:</span>
            <span>{data?.methodof}</span>
          </div>

          <div className="flex  items-start">
            <span className="font-semibold w-24 sm:w-36 lg:w-48">
              Belief about yourself
            </span>
            <span className="mr-3">:</span>
            <span>{data?.believe}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
