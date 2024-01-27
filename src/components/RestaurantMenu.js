import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategoryComponent from "./RestaurantCategoryComponent";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [expandItems, setExpandItems] = useState(null);

  if (resInfo === null) return <Shimmer />;

  console.log(resInfo)

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (

    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>

      {/* Categries Accordion */}

      {categories.map((category, index) => (
        // Controlled component
        <RestaurantCategoryComponent key={category?.card?.card?.title} data={category?.card?.card} showItems={index === expandItems ? true : false} setExpandItems={() => setExpandItems(index)} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
