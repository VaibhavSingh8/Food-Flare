import RestaurantCardComponent from "./RestaurantCardComponent";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {

  // local State variable
  const [resObjArray, setResObjArray] = useState([
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6613353&lng=77.22749449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await response.json();

    console.log(jsonData);
    //optional chaining
    setResObjArray(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // Conditional Rendering

  return resObjArray.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
          onClick={() => {
            const filterRestaurants = resObjArray.filter(
              (res) => res.info.avgRating > 4.0
            );
            setResObjArray(filterRestaurants);
          }}>Top Restaurants</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants" />
        <button type="button" className="search-button">Search</button>
      </div>
      <div className="restaurant-container">
        {
          resObjArray.map((resObj) => (
            < RestaurantCardComponent key={resObj.info.id} resData={resObj} />
          ))
        }
      </div>
    </div>
  );
};

export default BodyComponent;