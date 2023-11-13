import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategoryComponent from "./RestaurantCategoryComponent";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  //console.log(categories);
  return (

    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>

      {/* Categries Accordion */}

      {categories.map((category) => (
        <RestaurantCategoryComponent data={category?.card?.card} />
      ))}
    </div>
    // <div className="menu">
    //   <h1>{name}</h1>
    //   <h3>
    //     {cuisines.join(", ")} - {costForTwoMessage}
    //   </h3>
    //   <ul>
    //     {itemCards.map((item) => (
    //       <li key={item.card.info.id}>
    //         {item.card.info.name} - {"Rs. "}
    //         {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default RestaurantMenu;
