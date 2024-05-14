import { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import axios from 'axios';

const SearchBar = () => {
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
      {showResults && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md rounded-lg mt-2 z-10">
          {products.map((product) => (
            <div key={product.id} className="flex items-center gap-4 p-4 border-b last:border-none hover:bg-gray-100 transition-colors duration-200">
              <img src={product.images[0]?.url} alt={product.name} className="w-16 h-16 object-cover rounded" />
              <h3 className="text-base text-black font-semibold">{product.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;