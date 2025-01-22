import {useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

  const[resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

    useEffect(() => {
      fetchMenu();
    }, [])

    const fetchMenu = async () => {
      const data = await fetch(MENU_URL+resId);
      const menu = await data.json();
      setResInfo(menu);
    };

    if(resInfo === null){
         return (<Shimmer />);
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>Cuisines: {cuisines.join(" , ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
        <div>
          {itemCards.map((item) => {
            return (
              <div key={item?.card?.info?.id}>
                {item?.card?.info?.name}
                <br></br>
                {"₹ "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default RestaurantMenu;
