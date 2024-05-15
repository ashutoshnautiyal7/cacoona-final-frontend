'use client'

import { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (searchQuery) {
        try {
          const response = await axios.get(`/api/search?query=${searchQuery}`);
          console.log("response is ", response)
          console.log("data is ", response.data);
          setProducts(response.data);
          setShowResults(true);
        } catch (error) {
          console.error(error);
        }
      } else {
        setProducts([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleSearch = (e) => {
    console.log("handle search is called")
    console.log("e.target.value", e.target.value)
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative">
      <div className="w-[45rem] text-[12px] md:text-[14px] hidden md:flex mx-10">
        <input
          onChange={(e) => handleSearch(e)}
          value={searchQuery}
          type="text"
          placeholder="What are you looking for?"
          className="w-full py-2.5 px-4 pr-12 rounded-lg outline-none text-black"
        />
        <IoSearchOutline className="w-6 h-6 text-black absolute top-2 right-4 cursor-pointer" />
      </div>

      <div>
          <div className="mt-4 text-[13.5px] md:text-[14px] flex md:hidden relative">
            <input
            onChange={(e) => handleSearch(e)}
          value={searchQuery}
              type="text"
              placeholder="What are you looking for?"
              className="w-full p-1.5 md:py-2.5 px-4 pr-12 rounded-lg outline-none text-black"
            />
            <IoSearchOutline className="w-4 md:w-6 h-4 md:h-6 text-black absolute top-2 right-4 cursor-pointer" />
          </div>
        </div>
      {showResults && (
  <div
    className={`absolute top-full left-0 right-0 bg-white shadow-md rounded-lg mt-2 z-10 ${
      searchQuery ? 'md:w-[45rem] mx-auto' : 'w-full'
    }`}
  >
    {products.map((product) => (
      <div
  onClick={() => router.push(`/product/${product.id}`)}
  key={product.id}
  className="flex items-center gap-2 p-2 sm:p-1 border-b last:border-none hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
>
  <img
    src={product.images[0]?.url}
    alt={product.name}
    className="w-8 h-8 object-cover rounded md:w-16 md:h-16"
  />
  <h3 className="text-black font-semibold sm:text-xs">
    {product.name}
  </h3>
</div>
    ))}
  </div>
)}
    </div>
  );
};

export default SearchBar;