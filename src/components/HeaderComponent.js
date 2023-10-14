import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
const HeaderComponent = () => {

  const [btnName, setBtnName] = useState("Login"); // btnName is a state variable and setbtnName is a function to update the state variable.

  const onlineStatus = useInternetStatus();

  return (
    <div className="flex justify-between bg-orange-50">
      <div className="">
        <img className="w-20 mt-2" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4" >< Link to="/">Home</ Link></li>
          <li className="px-4">< Link to="/about">About Us</ Link></li>
          <li className="px-4">< Link to="/cart">Cart</ Link></li>
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