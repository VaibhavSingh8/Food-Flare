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
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </ div>
    </Provider >
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