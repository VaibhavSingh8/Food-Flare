import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import ErrorComponent from "./components/ErrorComponent";
import AboutUs from "./components/AboutUs";
import CartComponent from "./components/CartComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div>
        <HeaderComponent />
        <Outlet />
        <Footer />
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
          element: <AboutUs />,
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