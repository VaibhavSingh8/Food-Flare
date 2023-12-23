import { IMG_URL } from "../utils/constants";
import { addItemsToCart, removeItemsFromCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CategoryItemsList = ({ items }) => {
  const [itemQuantity, setItemQuantity] = useState(0);

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    //update the item quantity state
    setItemQuantity(itemQuantity + 1);
    // dispatch addItem action on button click
    dispatch(addItemsToCart(item));
  };

  const handleRemoveItems = (item) => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
      // dispatch removeItem action on button click
      dispatch(removeItemsFromCart(item));
    }
    return;
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-9 m-2 border-b-2 flex justify-between gap-x-6"
        >
          <div className="w-7/12 py-2">
            <h3>{item.card.info.name}</h3>
            <h4>
              {" "}
              - Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </h4>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-5/12 relative justify-center items-center">
            <img
              className="w-52 h-40 object-cover rounded-lg object-center "
              src={IMG_URL + item.card.info.imageId}
              alt="restaurant"
            />
            <div className="absolute text-green-500 bg-white flex -bottom-4 left-10 font-semibold rounded-lg p-2 shadow-lg gap-6">
              <button

                onClick={() => handleAddItems(item)}
              >
                +
              </button>
              {itemQuantity === 0 ? "ADD" : itemQuantity}
              <button

                onClick={() => handleRemoveItems(item)}
              >
                -
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItemsList;
