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
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61129608341754&lng=77.44435027241707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json(); //promise

    //optional chaining
    setResObjArray(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useInternetStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Oops! Looks like you are offline!! Please check your internet
        connection.
      </h1>
    );
  }
  // Conditional Rendering

  return resObjArray.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4">
      {/** Filter Top restaurants */}
      <div className="filter">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => {
            const highRatedRestaurants = resObjArray.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilteredRestaurants(highRatedRestaurants);
          }}
        >
          Top Restaurants
        </button>
      </div>

      {/** Search bar for searching restaurants */}
      <div className="m-3 p-3 flex justify-center">
        <input
          type="text"
          placeholder="Search for restaurants"
          className="m-2 p-1 border border-solid border-black"
          //value={searchText}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchText(e.target.value.toLowerCase());
            const restaurantSearch = resObjArray.filter((res) =>
              res.info.name.toLowerCase().includes(searchText)
            );
            setFilteredRestaurants(restaurantSearch);
          }}
        />

        {/** Clear search text */}
        <button
          className="px-4 py-1 bg-orange-200 m-3 rounded"
          onClick={() => {
            setSearchText("");
            setFilteredRestaurants(resObjArray);
          }}
        >
          Clear
        </button>

        {/** Search restaurants */}
        {/* <button
          className="px-4 py-1 bg-orange-200 m-3 rounded"
          onClick={() => {
            const restaurantSearch = resObjArray.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(restaurantSearch);
          }}
        >
          Search
        </button> */}
      </div>
      {/** Restaurant cards */}
      <div className="restaurant-container grid grid-cols-4">
        {filteredRestaurants.map((resObj) => (
          <Link key={resObj.info.id} to={"/restaurants/" + resObj.info.id}>
            <RestaurantCardComponent resData={resObj} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
