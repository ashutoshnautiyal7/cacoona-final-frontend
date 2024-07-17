import Link from "next/link";
import React from "react";

// const calculateRemainingTime = (createdAt, duration) => {
//   const endTime = new Date(createdAt);
//   endTime.setSeconds(endTime.getSeconds() + duration.seconds);
//   endTime.setMinutes(endTime.getMinutes() + duration.minutes);
//   endTime.setHours(endTime.getHours() + duration.hours);
//   endTime.setDate(endTime.getDate() + duration.days);

//   const now = new Date();
//   const difference = endTime - now;

//   if (difference <= 0) {
//     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//   }

//   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((difference / 1000 / 60) % 60);
//   const seconds = Math.floor((difference / 1000) % 60);

//   return { days, hours, minutes, seconds };
// };

const Section4 = () => {
  // const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // useEffect(() => {
  //   if (!timer || timer.length === 0 || timer[0].isRunning === false) {
  //     return;
  //   }

  //   const calculateAndSetRemainingTime = async() => {
  //     const newRemainingTime = calculateRemainingTime(timer[0].updatedAt, {
  //       days: timer[0].days,
  //       hours: timer[0].hours,
  //       minutes: timer[0].minutes,
  //       seconds: timer[0].seconds,
  //     });
  //     setRemainingTime(newRemainingTime);

  //     if (
  //       newRemainingTime.days === 0 &&
  //       newRemainingTime.hours === 0 &&
  //       newRemainingTime.minutes === 0 &&
  //       newRemainingTime.seconds === 0 &&
  //       timer[0].isRunning
  //     ) {
  //       try{
  //         await axios.patch(`/api/timer/${timer[0].id}`);
  //       }
  //       catch(error){
  //         console.log(error);
  //       }

  //     }
  //   };

  //   calculateAndSetRemainingTime(); // Set initial time
  //   const interval = setInterval(calculateAndSetRemainingTime, 1000);

  //   return () => clearInterval(interval);
  // }, [timer]);

  // if (!timer || timer.length === 0) {
  //   return null;
  // }

  return (
    <div className="py-6 md:py-10 bg-[#30304C]">
      <div className="bg-black text-white px-[1.2rem] lg:px-32 py-12 md:py-16 flex justify-around">
        <div className="">
          <h2 className="text-[#4FA2AE] font-semibold">Categories</h2>
          <p className="text-[36px] md:text-[48px] max-w-[440px] leading-[120%] mt-4 md:mt-6 ">
            Improve Your Daily Life
          </p>
          {/* {timer[0].isRunning ? (
            <div className="flex gap-4 md:gap-6 mt-4 md:mt-6">
              <span className="p-2 w-14 md:w-16 h-14 md:h-16 rounded-full bg-white text-black flex flex-col -gap-2 items-center justify-center">
                <p className="font-semibold leading-3">{remainingTime.hours}</p>
                <p className="text-[11px]">Hours</p>
              </span>
              <span className="p-2 w-14 md:w-16 h-14 md:h-16 rounded-full bg-white text-black flex flex-col -gap-2 items-center justify-center">
                <p className="font-semibold leading-3">{remainingTime.days}</p>
                <p className="text-[11px]">Days</p>
              </span>
              <span className="p-2 w-14 md:w-16 h-14 md:h-16 rounded-full bg-white text-black flex flex-col -gap-2 items-center justify-center">
                <p className="font-semibold leading-3">
                  {remainingTime.minutes}
                </p>
                <p className="text-[11px]">Minutes</p>
              </span>
              <span className="p-2 w-14 md:w-16 h-14 md:h-16 rounded-full bg-white text-black flex flex-col -gap-2 items-center justify-center">
                <p className="font-semibold leading-3">
                  {remainingTime.seconds}
                </p>
                <p className="text-[11px]">Seconds</p>
              </span>
            </div>
          ) : (
            <div></div>
          )} */}
          <div className="flex mt-6 md:mt-8">
            <Link
              href={"/product/663b45a1c30b2773d0ca499a"}
              className="text-white bg-[#4FA2AE] text-[14px] md:text-[16px] flex justify-center items-center py-2 md:py-2.5 px-5 md:px-6 rounded-sm whitespace-nowrap"
            >
              Buy Now!
            </Link>
          </div>
        </div>
        <div className="relative hidden md:flex">
          <img
            src="/Images/book.png"
            alt="#"
            className="w-[15rem] h-[22rem] relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
