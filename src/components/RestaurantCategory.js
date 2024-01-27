import ItemsCategoryList from "./ItemsCategoryList";

const RestaurantCategory = ({ data, showItems, setExpandItems }) => {

  const handleClick = () => {
    setExpandItems();
  }

  const qw = {};

  return <div>

    <div className="w-8/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="text-md font-bold">{data.title}({data.itemCards.length}) </span>
      </div>


      {showItems && <ItemsCategoryList items={data.itemCards} quant={qw} />}
    </div>
  </div>
}

export default RestaurantCategory;