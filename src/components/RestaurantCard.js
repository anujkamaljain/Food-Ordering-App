import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, sla, cuisines, locality } = resData?.info;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL
           +
          cloudinaryImageId
        }
      ></img>
      <h3 className="megha">{name}</h3>
      <div className="res-information">
        <img
          className="starlogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM-To_Ll9cisQCt6SmigbXBduLhb29TRVGw&s"
        ></img>
        <h4 className="res-info2">{avgRating}</h4>
        <ul>
          <li className="res-info3">{sla.slaString}</li>
        </ul>
      </div>
      <h4 className="res-info">{cuisines.join(", ")}</h4>
      <h4 className="res-info">{locality}</h4>
    </div>
  );
};

export default RestaurantCard;