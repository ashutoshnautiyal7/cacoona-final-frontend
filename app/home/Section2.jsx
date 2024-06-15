import React from "react";

const features = [
  {
    id: 1,
    imageUrl: "/Images/kf1.png",
    title: "Your Safe Haven",
    description:
      "Chesper is your sanctuary, where you can pour out your thoughts, feelings, and dreams without judgment. It's a private space dedicated to your self-expression and inner exploration.",
  },
  {
    id: 2,
    imageUrl: "/Images/kf2.png",
    title: "Discover Clipcuts",
    description:
      "Uncover hidden gems within your journal with Cacoona Clipcuts. These specially designed pages offer glimpses of wisdom and guidance, inviting you to delve deeper into your thoughts and emotions",
  },
  {
    id: 3,
    imageUrl: "/Images/kf3.png",
    title: "Reflection Made Easy",
    description:
      "Chesper provides thought-provoking prompts and exercises to guide your journey of self-reflection and personal growth. From gratitude exercises to goal-setting prompts, discover new insights and perspectives with each entry",
  },
  {
    id: 4,
    imageUrl: "/Images/kf4.png",
    title: "Uncover Your True Self",
    description:
      "Embark on a journey of self-discovery with Chesper. Explore your passions, uncover hidden talents, and gain clarity on your desires and aspirations. Let your journal be your compass as you navigate the depths of your inner world",
  },
  {
    id: 5,
    imageUrl: "/Images/kf5.png",
    title: "Empower Your Mind",
    description:
      "Cultivate a positive mindset and embrace growth with Chesper. Through affirmations, gratitude practices, and positive self-talk, nurture a mindset of resilience and empowerment. Let your journal be a source of inspiration and motivation on your journey",
  },
];

const Section2 = () => {
  return (
    <section className="px-[1.2rem] md:px-[4rem] pt-14 pb-16 md:pb-20 flex items-center flex-col bg-[#30304C] text-white relative">
      <h2 className="text-[42px] md:text-[52px] xl:text-[64px] flex items-center">
        <span className="">Key </span>
        <span className="border-b-[3px] border-orange-600 leading-[110%] ml-2 md:ml-4 py-1 md:py-3 md:w-[18rem] xl:w-[24rem]">
          {" "}
          Features
        </span>
      </h2>
      <p className="text-[18px] md:text-[24px] mt-5 md:mt-10">
        Explore the Transformative Elements of Chesper
      </p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 xl:gap-20 mt-10 md:mt-16 ">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="text-black md:max-w-[360px] flex flex-col items-center bg-[#4fa2ae] px-6 py-6 rounded-xl"
          >
            <img
              src={feature.imageUrl}
              alt="#"
              className="w-[5rem] md:w-[9rem] h-[5rem] md:h-[9rem]"
            />
            <h3 className="text-[18px] md:text-[24px] font-medium mt-3 md:mt-6">
              {feature.title}
            </h3>
            <p className="text-[13px] md:text-[15px] mt-3">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
