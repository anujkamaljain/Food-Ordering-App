import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {

  const [showItems, setshowItems] = useState(data?.itemCards);

  const handleClick = () => {
    showItems.length === 0 ? setshowItems(data?.itemCards) : setshowItems([]);
  };

    return (
      <div>
        <div className="mx-auto my-4 w-6/12 bg-gray-100 p-4 shadow-lg">
          <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="text-md font-extrabold">
              {data?.title + " " + "(" + data?.itemCards?.length + ")"}
            </span>
            <span className="text-lg text-gray-500">🇻</span>
          </div>
          <ItemList items={showItems} />
        </div>
      </div>
    );
}

export default RestaurantCategory;