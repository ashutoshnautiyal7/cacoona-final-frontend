import React from "react";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

const reviews = [
  {
    id: 1,
    name: "Alex L.",
    rating: 4,
    date: "31 March 2024 at 06:30 pm",
    comment:
      "Beautifully designed and incredibly empowering. Chesper has become my daily companion.",
    profileImgSrc: "",
  },
  {
    id: 1,
    name: "Alex L.",
    rating: 4,
    date: "31 March 2024 at 06:30 pm",
    comment:
      "Beautifully designed and incredibly empowering. Chesper has become my daily companion.",
    profileImgSrc: "",
  },
  {
    id: 1,
    name: "Alex L.",
    rating: 4,
    date: "31 March 2024 at 06:30 pm",
    comment:
      "Beautifully designed and incredibly empowering. Chesper has become my daily companion.",
    profileImgSrc: "",
  },
];

const Review = () => {
  return (
    <section className="bg-[#30304C] py-11 px-[1.2rem] md:px-[2.5rem] text-white">
      <h2 className="text-[39px] font-bold">Reviews ({reviews.length})</h2>
      {reviews.map((review) => (
        <div key={review.id} className="flex gap-6 mt-8">
          <div>
            <img
              src={review.profileImgSrc}
              alt="#"
              className="object-cover h-[64px] w-[64px] rounded-full bg-gray-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex gap-6 items-center text-[24px]">
              {review.name}
              <Stack spacing={1}>
                <Rating
                  name={`rating-${review.id}`}
                  value={review.rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </span>
            <span className="text-[16px]">{review.date}</span>
            <span className="text-[14px]">{review.comment}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Review;
