import RestaurantCard from "./RestaurantCard"; 
import ResList from "../utils/mockdata";

const Body = () => {
  return (
    <div className="Body">
      <div className="res-container">
        {ResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;