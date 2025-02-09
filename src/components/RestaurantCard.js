import { CDN_URL } from "../utils/constants";
import { STAR_LOGO } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, sla, cuisines, locality } = resData?.info;
  return (
    <div data-testid = "resCard" className="m-1 mb-4 h-96 w-2xs rounded-[6%] border-0 transition-all duration-80 ease-in hover:translate-y-1 hover:shadow-2xl">
      <img
        alt="res-logo"
        className="h-56 w-full rounded-[6%]"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="me-1 mt-1 mb-[-18px] ml-3 overflow-hidden text-[21px] font-semibold text-ellipsis whitespace-nowrap text-black">
        {name}
      </h3>
      <div className="mt-3 flex w-72 items-center p-1">
        <img
          className="h-7"
          src= {STAR_LOGO}
        ></img>
        <h4 className="text-black">{avgRating + " " + "•"}</h4>
        <ul>
          <li className="ml-2 text-black">{sla.slaString}</li>
        </ul>
      </div>
      <h4 className="ml-3 mt-[-2] font-semibold text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
        {cuisines.join(", ")}
      </h4>
      <h4 className="ml-3 font-semibold text-gray-500">{locality}</h4>
    </div>
  );
};

export default RestaurantCard;