import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { STAR_LOGO } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

 const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    locality, sla } = resInfo?.data?.cards[2]?.card?.card?.info || {};
  const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards;


  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
    return (
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });


  if (!Array.isArray(itemCards)) {
    return (
      <div>
        <h1>No menu items available.</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10 text-center">
        <h1 className="my-7 text-2xl font-extrabold">{name}</h1>
        <div className="mx-auto mb-7 h-40 w-1/2 rounded-2xl bg-gray-100 drop-shadow-lg">
          <div className="flex items-center p-1">
            <img className="mt-4 ml-3 h-7 rounded-2xl" src={STAR_LOGO}></img>
            <h4 className="mt-4 ml-1 font-bold">{avgRating}</h4>
            <h4 className="mt-4 ml-1 font-bold">
              {"(" + totalRatingsString + ")" + " " + "•" + " "}
            </h4>
            <h4 className="mt-4 ml-1 font-bold">{costForTwoMessage}</h4>
          </div>
          <h3 className="ml-7 text-start font-bold text-orange-500 underline">
            {cuisines?.join(" , ")}
          </h3>
          <h3 className="mt-2.5 ml-6 text-start text-sm font-bold">
            {"Outlet" + " " + ":" + " " + locality}
          </h3>
          <h3 className="mt-2 ml-6.5 text-start text-sm font-bold">
            {"•" + " " + sla.slaString}
          </h3>
        </div>
        <h1 className="font-medium text-gray-500">
          {"--•" + " " + "M E N U" + " " + "•--"}
        </h1>
      </div>
      <div className="text-center">
        {categories.map((category, index) => { 
          return (
            <RestaurantCategory
              key={category?.card?.card?.categoryId}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
