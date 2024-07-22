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

  const [isActiveTopRestaurants, setIsActiveTopRestaurants] = useState(true);
  const [isActiveCostForTwo, setIsActiveCostForTwo] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchText.length === 0) {
      setFilteredRestaurants(resObjArray);
    }
  }, [searchText]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61129608341754&lng=77.44435027241707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
    <>
      {/** Filter Top restaurants */}
      <div className="m-4 p-2 sm:flex justify-between sm:mx-10 md:mx-28">
        <div className="flex">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="m-2 p-1 border-solid border border-gray-300"
            //value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value.toLowerCase());
              const restaurantSearch = resObjArray.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurants(restaurantSearch);
            }}
          />

          {/** Clear search text */}
          {/* <button
            className="px-4 py-1 bg-orange-200 m-3 rounded"
            onClick={() => {
              setSearchText("");
              setFilteredRestaurants(resObjArray);
            }}
          >
            Clear
          </button> */}
        </div>
        <div>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-3 py-2 border border-blue-500 hover:border-transparent rounded mx-2 mt-1.5"
            onClick={() => {
              const highRatedRestaurants = resObjArray.filter(
                (res) => res.info.avgRating > 4.0
              );

              setIsActiveTopRestaurants(!isActiveTopRestaurants);
              isActiveTopRestaurants
                ? setFilteredRestaurants(highRatedRestaurants)
                : setFilteredRestaurants(resObjArray);
            }}
          >
            Top Restaurants
          </button>

          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-3 py-2 border border-blue-500 hover:border-transparent rounded mx-2 mt-1.5"
            onClick={() => {
              const highRatedRestaurants = [...filteredRestaurants].sort(
                (a, b) => {
                  return a.info.costForTwo.localeCompare(b.info.costForTwo);
                }
              );

              setIsActiveCostForTwo(!isActiveCostForTwo);

              isActiveCostForTwo
                ? setFilteredRestaurants(highRatedRestaurants)
                : setFilteredRestaurants(resObjArray);
            }}
          >
            Cost For Two
          </button>
        </div>
      </div>

      {/** Restaurant cards */}
      <div className="restaurant-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredRestaurants.map((resObj) => (
          <Link key={resObj.info.id} to={"/restaurants/" + resObj.info.id}>
            <RestaurantCardComponent resData={resObj} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default BodyComponent;
