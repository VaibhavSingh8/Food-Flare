import { IMG_URL } from "../utils/constants";

const RestaurantCardComponent = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRatingString, cuisines, areaName, costForTwo, id } = resData?.info;
  return (
    <div className="restaurant-card" >
      <div className="restaurant-image">
        <img src={IMG_URL + cloudinaryImageId} alt="restaurant" />
      </div>
      <div className="restaurant-details">
        <div className="restaurant-name"><h4>{name}</h4></div>
        <div className="restaurant-rating"><h4>Rating: {avgRatingString} stars</h4></div>
        <div className="restaurant-cuisine"><h4>{cuisines.join(", ")}</h4></div>
        <div className="restaurant-location"><h4>Location: {areaName}</h4></div>
        <div className="price-for-two"><h4>{costForTwo}</h4></div>
      </div>
    </div>
  );
};

export default RestaurantCardComponent;