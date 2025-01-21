import RestaurantCard from "./RestaurantCard"; 
import {useEffect, useState} from "react";
import Shimmer from "./shimmer";

const Body = () => {

  //State variable or React variable
  const[listofRestaurants, setListOfRestaurant] = useState([]);
  const[FilteredlistofRes, setFilteredlistofRestaurant] = useState([]);
  const[searchText, setsearchText] = useState("");
   
  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
      const Data = await fetch(
        "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9195866&lng=75.7879608&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await Data.json();
      setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredlistofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listofRestaurants == 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="features">
        <div className="Search">
          <input
            placeholder="Search Your Favourite Food "
            id="searchbar"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const finallist = listofRestaurants.filter((rest) =>
                rest?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredlistofRestaurant(finallist);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const FilteredlistofRestaurants = listofRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredlistofRestaurant(FilteredlistofRestaurants);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {FilteredlistofRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;