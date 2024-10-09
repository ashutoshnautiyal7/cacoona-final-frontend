"use client";

import React from "react";
import Product from "../Home/Product";
import { useSession } from "next-auth/react";

const Category = ({ productList }) => {
  const { data: session, status } = useSession();

  const email = session?.user.email;

  const filteredProducts = productList?.filter(
    (product) => product.isArchived === true
  );
  return (
    <div
      className="mt-6 md:mt-10 flex flex-wrap justify-center md:justify-start gap-5 md:gap-10 min-h-[40vh]"
      style={{ scrollbarWidth: "none" }}
    >
      {filteredProducts.map((product) => (
        <Product
          email={email}
          key={product.id}
          Id={product.id}
          imageSrc={product.images[0].url}
          productName={product.name}
          currentPrice={product.currentPrice}
          originalPrice={product.originalPrice}
          discount={product.category}
          category={product.category}
          // rating={4.5}
          // totalRatings={5}
        />
      ))}
    </div>
  );
};

// just adding this for rebuild

export default Category;
