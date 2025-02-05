import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useBody";
import { useState } from "react";

const Body = () => {
  const { restaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurants();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filtered = restaurants.filter((rest) =>
      rest?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleFilterTopRated = () => {
    const filtered = restaurants.filter((res) => res.info.avgRating > 4.2);
    setFilteredRestaurants(filtered);
  };

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="mt-4 mb-6 flex justify-around">
        <div className="flex w-2/5 items-center justify-center">
          <input
            placeholder="Search Your Favourite Food"
            className="mr-2.5 h-6 w-7/10 rounded border border-gray-300 px-1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="ml-1 h-8 cursor-pointer border-black text-orange-400"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="h-6 w-40 cursor-pointer border border-gray-400 text-orange-400 transition duration-80 ease-in hover:-translate-y-0.5"
            onClick={handleFilterTopRated}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap justify-around">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
            className="links"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
