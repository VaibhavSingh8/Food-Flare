import { IMG_URL } from "../utils/constants";
import { addItemsToCart, removeItemsFromCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CategoryItemsList = ({ items, quant }) => {

  const [itemQuantity, setItemQuantity] = useState(() => {
    let itemQuantity = {};
    // console.log(quant, "quant");
    if (Object.keys(quant).length === 0) {
      items.forEach(item => {
        itemQuantity[item.card.info.id] = 0;
      });
    }
    else {
      itemQuantity = quant;
    }
    console.log(itemQuantity, "itemQuantity");
    return itemQuantity;
  });


  // const [itemQuantity, setItemQuantity] = useState(0);
  const dispatch = useDispatch();
  items.forEach(item => {
    item.quantity = 0;
  });
  //Handle adding items to cart
  const handleAddItems = (item) => {

    let currentQuantity = itemQuantity[item.card.info.id];

    let newQuantity = currentQuantity + 1;

    setItemQuantity((prevItemQuantity) => {

      const newItemQuantity = { ...prevItemQuantity };

      newItemQuantity[item.card.info.id] = newQuantity;
      console.log(newItemQuantity, "newItemQuantity");
      return newItemQuantity;
    });

    // const updatedItems = newItems.map((i) => {
    //   if (i.card.info.id === item.card.info.id) {
    //     return { ...i, quantity: (i.quantity || 0) + 1 };
    //   } else {
    //     return i;
    //   }
    // });

    // setItems(updatedItems);
    dispatch(addItemsToCart({ item, itemQuantity }));
  };

  const handleRemoveItems = (item) => {

    let currentQuantity = itemQuantity[item.card.info.id];

    if (currentQuantity > 0) {

      let newCurrentQuantity = currentQuantity - 1;

      // update the item quantity state
      setItemQuantity(() => ({ ...itemQuantity, [item.card.info.id]: newCurrentQuantity }));

      // const updatedItems = newItems.map((i) => {
      //   if (i.card.info.id === item.card.info.id) {
      //     return { ...i, quantity: i.quantity - 1 };
      //   } else {
      //     return i;
      //   }
      // });

      // setItems(updatedItems);

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
            <span className="font-pop font-semibold float-left">{item.card.info.name}</span>
            <span className="">
              {" "}
              - Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs text-left mt-2">{item.card.info.description}</p>
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

              {itemQuantity[item.card.info.id] === 0 ? "ADD" : itemQuantity[item.card.info.id]}

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
