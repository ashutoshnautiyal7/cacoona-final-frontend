import React, { useState } from "react";

const Comment = ({ text }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <p className="">
      {readMore ? text.slice(0, 50) : text}
      {text.length > 50 && (
        <span
          className="text-gray-500"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "...read more" : " ...show less"}
        </span>
      )}
    </p>
  );
};

export default Comment;
