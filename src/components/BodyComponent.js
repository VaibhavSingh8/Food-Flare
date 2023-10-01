import RestaurantCardComponent from "./RestaurantCardComponent";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const BodyComponent = () => {
  // local State variable
  const [resObjArray, setResObjArray] = useState([]);

  //copy of resObjArray local State variable for filtering
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // local State variable for search text
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6613353&lng=77.22749449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json(); //promise

    //optional chaining
    setResObjArray(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useInternetStatus();

  if (onlineStatus === false) {
    return (
      <h1>Oops! Looks like you are offline!! Please check your internet connection.</h1>
    )
  }
  // Conditional Rendering

  return resObjArray.length === 0 ? (
    <Shimmer />
  ) : (

    < div className="body" >
      {/** Filter Top restaurants */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaurants = resObjArray.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilteredRestaurants(filterRestaurants);
          }}
        >
          Top Restaurants
        </button>
      </div>

      {/** Search bar for searching restaurants */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for restaurants"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        {/** Search restaurants */}
        <button
          type="button"
          className="search-button"
          onClick={() => {
            const restaurantSearch = resObjArray.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(restaurantSearch);
          }}
        >
          Search
        </button>
      </div>
      {/** Restaurant cards */}
      <div className="restaurant-container">
        {filteredRestaurants.map((resObj) => (
          <Link key={resObj.info.id} to={"/restaurants/" + resObj.info.id} ><RestaurantCardComponent resData={resObj} /></Link>
        ))}
      </div>
    </div >
  );
};

export default BodyComponent;
