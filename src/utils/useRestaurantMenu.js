import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  // state variable
  const [resInfo, setResInfo] = useState(null);

  //fetch data
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const apiResponse = await fetch(
      MENU_API + resId
    );
    const jsonResponse = await apiResponse.json();

    setResInfo(jsonResponse.data);
  };

  return resInfo;
}

export default useRestaurantMenu;