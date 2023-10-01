import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import ErrorComponent from "./components/ErrorComponent";
import AboutComponent from "./components/AboutComponent";
import CartComponent from "./components/CartComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";



const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </ div>
  );
};

const appRoute = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <BodyComponent />,
        },
        {
          path: "/about",
          element: <AboutComponent />,
        },
        {
          path: "/cart",
          element: <CartComponent />,
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        },
      ],
      errorElement: <ErrorComponent />,
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);