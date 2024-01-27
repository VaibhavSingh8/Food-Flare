import { IMG_URL } from "../utils/constants";

const RestaurantCardComponent = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRatingString, cuisines, areaName, costForTwo, id } = resData?.info;
  return (
    <div className="m-4 p-4 rounded overflow-hidden shadow-lg md:flex md:flex-col md:w-64 lg:w-72">
      <img className="w-full h-48 md:h-60 object-cover rounded-lg mb-4 md:mb-0" src={IMG_URL + cloudinaryImageId} alt="restaurant" />
      <div className="md:ml-4 md:flex-grow mt-2">
        <div className="font-bold text-xl mb-2">{name.length > 15 ? name.slice(0, 15) + "..." : name.slice(0, 15)}</div>
        <div className="restaurant-rating"><h4>Rating: {avgRatingString} ⭐</h4></div>
        <div className="restaurant-cuisine"><h4>{cuisines.slice(0, 2).join(", ")}{cuisines.length > 2 ? "..." : ""}</h4></div>
        <div className="restaurant-location"><h4>Location: {areaName.length > 15 ? areaName.slice(0, 15) + "..." : areaName.slice(0, 15)}</h4></div>
        <div className="price-for-two"><h4>{costForTwo}</h4></div>
      </div>
    </div>


  );
};

// Higher Order Component

// Input - RestaurantCardComponent => PromotedRestaurantCardComponent

export const promotedRestaurant = (RestaurantCardComponent) => {
  return (props) => {
    return (
      <div>
        <label>Currently Closed</label>
        <RestaurantCardComponent {...props} />
      </div>
    );
  };
};

export default RestaurantCardComponent;