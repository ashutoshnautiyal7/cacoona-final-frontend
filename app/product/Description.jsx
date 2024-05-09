import React from "react";

const Description = ({ des }) => {
  return (
    <section className="bg-[#30304C] py-11 px-[1.2rem] md:px-[2.5rem] text-white">
      <h2 className="text-[39px] font-bold">Description</h2>
      {des || "here comes the description"}
    </section>
  );
};

export default Description;
