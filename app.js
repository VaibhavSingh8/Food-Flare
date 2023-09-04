import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Basic React App Layout
 * 
 * Header
 *  - Logo
 *  - Navigation
 * BODY
 *  - Search Bar
 *  - Restaurant Contianer
 *  - Restaurant Cards
 * FOOTER
 *  - Contact
 *  - Copy Right
 *  - Social Media
 *  - Links
 */

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://w7.pngwing.com/pngs/894/279/png-transparent-online-food-ordering-food-delivery-grubhub-others-food-service-logo-thumbnail.png" alt="logo" />
      </div>
      <div className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Cart</a></li>
        </ul>
      </div>

    </div>
  );
};

const RestaurantCardComponent = () => {
  return (
    <div className="restaurant-card" >
      <div className="restaurant-image">
        <img src="https://www.shutterstock.com/shutterstock/photos/2269871217/display_1500/stock-vector-kfc-logo-icon-art-design-vector-isolated-head-face-people-person-illustration-american-store-bernie-2269871217.jpg" alt="restaurant" />
      </div>
      <div className="restaurant-details">
        <div className="restaurant-name">KFC</div>
        <div className="restaurant-rating">Rating - 5</div>
        <div className="restaurant-cuisine">Cuisine - Non-veg</div>
        <div className="restaurant-location">Location - INDIA</div>
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants" />
        <button className="search-button">Search</button>
      </div>
      <div className="restaurant-container">
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
      </div>
    </div>
  );
};

const FooterComponent = () => { };

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </ div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);