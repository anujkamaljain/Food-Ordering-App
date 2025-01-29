import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};
  const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards;

  if (!Array.isArray(itemCards)) {
    return (
      <div>
        <h1>No menu items available.</h1>
      </div>
    );
  }

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>Cuisines: {cuisines?.join(" , ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <div>
        {itemCards.map((item) => (
          <div key={item?.card?.info?.id}>
            {item?.card?.info?.name}
            <br />
            {"₹ "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
