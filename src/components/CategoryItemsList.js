import { IMG_URL } from "../utils/constants";

const CategoryItemsList = ({ items }) => {

  console.log(items)
  return (
    <div>
      {items.map((item) =>
        <div key={item.card.info.id} className="p-2 m-2 border-b-2">
          <img className="h-10 w-14 rounded-lg" src={IMG_URL + item.card.info.imageId} alt="restaurant" />
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span> - Rs. {(item.card.info.price) / 100}</span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
        </div>
      )
      }
    </div >
  )
};

export default CategoryItemsList;