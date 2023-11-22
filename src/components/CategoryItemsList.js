import { IMG_URL } from "../utils/constants";

const CategoryItemsList = ({ items }) => {

  console.log(items)
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-b-2 flex justify-between">
          <div className="w-3/12 p-4">
            <img src={IMG_URL + item.card.info.imageId} alt="restaurant" />
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