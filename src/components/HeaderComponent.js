import logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import { useSelector } from "react-redux";

const HeaderComponent = () => {

  const [btnName, setBtnName] = useState("Login");

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const onlineStatus = useInternetStatus();

  //Subscribe to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-white sticky top-0 left-0 right-0 z-10 shadow-md">
      <div className="mx-4">
        < Link to="/"><img className="w-24 mt-1" src={logo} alt="logo" /></ Link>
      </div>

      <div className="hidden sm:flex items-center">
        <ul className="flex p-4 m-4 items-center ">
          <li className="px-4 ">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 hover:text-orange-500" >< Link to="/">Home</ Link></li>
          <li className="px-4 hover:text-orange-500">< Link to="/about">About Us</ Link></li>
          <li className="px-4 hover:text-orange-500">< Link to="/cart">🛒: ({cartItems.length} items)</ Link></li>
          {/* <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() =>
            btnName === "Login" ?
              setBtnName("Logout") : setBtnName("Login")}>
            {btnName}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;