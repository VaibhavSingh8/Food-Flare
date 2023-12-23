import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import { useSelector } from "react-redux";
const HeaderComponent = () => {

  const [btnName, setBtnName] = useState("Login"); // btnName is a state variable and setbtnName is a function to update the state variable.

  const onlineStatus = useInternetStatus();

  //Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-orange-50 sticky top-0 left-0 right-0 z-10">
      <div className="mx-4">
        <img className="w-20 mt-2" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4" >< Link to="/">Home</ Link></li>
          <li className="px-4">< Link to="/about">About Us</ Link></li>
          <li className="px-4">< Link to="/cart">🛒: ({cartItems.length} items)</ Link></li>
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() =>
            btnName === "Login" ?
              setBtnName("Logout") : setBtnName("Login")}>
            {btnName}
          </button>
        </ul>
      </div>

    </div>
  );
};

export default HeaderComponent;