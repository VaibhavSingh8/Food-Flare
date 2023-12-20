import { IMG_URL } from "../utils/constants";
import { addItemsToCart } from "../utils/cartSlice"
import { useDispatch } from "react-redux";

const CategoryItemsList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    // dispatch action on button click
    dispatch(addItemsToCart(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-b-2 flex justify-between">
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="bg-white text-green-500 rounded-lg p-2 mx-6 shadow-lg" onClick={() => handleAddItems(item)} >Add +</button>
            </div>
            <img className="w-32 h-24" src={IMG_URL + item.card.info.imageId} alt="restaurant" />
          </div>

          <div className="w-9/12">
            <div className="py-2 ">
              <span>{item.card.info.name}</span>
              <span> - Rs. {(item.card.info.price) / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        </div>

      )
      )
      }
    </div >
  )
};

export default CategoryItemsList;