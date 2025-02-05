import { useDispatch } from "react-redux";
import { CDN_URL, STAR_LOGO, STAR_LOGO2 } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";

const CartItemList = ({ items }) => {

    const dispatch = useDispatch();

   const handleRemove = (index) => {
     dispatch(removeItem(index));
   }

  return (
    <div>
      {items.map((item, index) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="my-4 flex justify-between border-b-1 border-gray-300 text-start sm:h-96 md:h-96 lg:h-60"
          >
            <div className="mr-1.5">
              {item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                ? "🟢"
                : "🔴"}
              <p className="mt-1.5 text-lg font-bold text-[#02060c]/75">
                {item?.card?.info?.name}
              </p>
              <p className="font-bold">
                ₹{" "}
                {item?.card?.info?.defaultPrice
                  ? item?.card?.info?.defaultPrice / 100
                  : item?.card?.info?.price / 100}
              </p>
              <div className="my-1 flex items-center">
                {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
                  <img
                    className="h-4"
                    src={
                      item?.card?.info?.ratings?.aggregatedRating?.rating > 3
                        ? STAR_LOGO2
                        : STAR_LOGO
                    }
                  ></img>
                ) : (
                  " "
                )}
                <p
                  className={`ml-1 text-sm font-bold ${item?.card?.info?.ratings?.aggregatedRating?.rating > 4 ? "text-green-900" : item?.card?.info?.ratings?.aggregatedRating?.rating > 3 ? "text-green-600" : "text-yellow-500"}`}
                >
                  {item?.card?.info?.ratings?.aggregatedRating?.rating
                    ? item?.card?.info?.ratings?.aggregatedRating?.rating
                    : " "}
                </p>
                <p className="ml-0.5 text-xs font-bold text-gray-500">
                  {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2
                    ? "(" +
                      item?.card?.info?.ratings?.aggregatedRating
                        ?.ratingCountV2 +
                      ")"
                    : " "}
                </p>
              </div>
              <p className="mt-2.5 mb-5 text-base font-normal text-gray-600">
                {item?.card?.info?.description}
              </p>
            </div>
            <div>
              <button
                className="absolute mt-28 w-24 cursor-pointer rounded-lg bg-white p-2 font-bold text-green-400 shadow-2xl transition delay-100 duration-150 ease-in hover:bg-gray-200 sm:left-6/12 md:left-6/12 lg:left-8/12 ml-4"
                onClick={() => handleRemove(index)}
              >
                REMOVE
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt=" "
              className="mb-4 h-32 w-32 cursor-pointer rounded-xl"
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default CartItemList;
