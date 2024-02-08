import { Client } from 'appwrite';
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

  const client = new Client();

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65b4f145e041657d95ce');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://corsproxy.org/?https%3A%2F%2F65b4f285b6b7261e8f76.appwrite.global%2F"
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
    < >
      {/** Filter Top restaurants */}
      <div className="m-4 p-2 flex justify-between mx-10 md:mx-28">

        <div className=" flex">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="m-2 p-1 border border-solid border-grey-200"
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

        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 border border-blue-500 hover:border-transparent rounded"
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
