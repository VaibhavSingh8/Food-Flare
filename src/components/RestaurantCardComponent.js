import { IMG_URL } from "../utils/constants";

const RestaurantCardComponent = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRatingString, cuisines, areaName, costForTwo, id } = resData?.info;
  return (
    <div className="restaurant-card m-4 p-4" >
      <div className="restaurant-image">
        <img className = "h-60 w-64" src={IMG_URL + cloudinaryImageId} alt="restaurant" />
      </div>
      <div className="restaurant-details mt-2">
        <div className="restaurant-name font-bold py-2"><h3>{name}</h3></div>
        <div className="restaurant-rating"><h4>Rating: {avgRatingString} stars</h4></div>
        <div className="restaurant-cuisine"><h4>{cuisines.join(", ")}</h4></div>
        <div className="restaurant-location"><h4>Location: {areaName}</h4></div>
        <div className="price-for-two"><h4>{costForTwo}</h4></div>
      </div>
    </div>
  );
};

// Higher Order Component

// Input - RestaurantCardComponent => PromotedRestaurantCardComponent

export const promotedRestaurant  = (RestaurantCardComponent) => { 
  return (props) => {
    return (
      <div>
      <label>Currently Closed</label>
      <RestaurantCardComponent {...props}/>
      </div>
    );
  };
};

export default RestaurantCardComponent;