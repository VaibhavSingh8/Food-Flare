import CategoryItemsList from "./CategoryItemsList";

const RestaurantCategoryComponent = ({ data }) => {

  return <div>
    {/* Header */}
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      <div className="flex justify-between">
        <span className="text-md font-bold">{data.title}({data.itemCards.length}) </span>
        <span>^</span>
      </div>

      { /* Body*/}
      <CategoryItemsList items={data.itemCards} />
    </div>
  </div>
}

export default RestaurantCategoryComponent;