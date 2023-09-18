import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const HeaderComponent = () => {

  const [btnName, setBtnName] = useState("Login"); // btnName is a state variable and setbtnName is a function to update the state variable.

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="navigation">
        <ul>
          <li>< Link to="/">Home</ Link></li>
          <li>< Link to="/about">About Us</ Link></li>
          <li>< Link to="/cart">Cart</ Link></li>
          <button className="login-btn" onClick={() =>
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