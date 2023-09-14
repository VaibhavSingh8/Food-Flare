import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const HeaderComponent = () => {

  const [btnName, setBtnName] = useState("Login"); // btnName is a state variable and setbtnName is a function to update the state variable.

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Cart</a></li>
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