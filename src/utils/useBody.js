import { useState, useEffect } from "react";
import { BODY_URL } from "./constants";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        BODY_URL
      );
      const json = await response.json();
      const fetchedRestaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurants(fetchedRestaurants);
      setFilteredRestaurants(fetchedRestaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  return {
    restaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  };
};

export default useRestaurants;
