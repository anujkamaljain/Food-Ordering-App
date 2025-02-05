import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

    return (
      <div>
        <div className="mx-auto my-4 w-6/12 bg-gray-100 p-4 shadow-lg">
          <div
            className="flex cursor-pointer justify-between"
            onClick={handleClick}
          >
            <span className="text-md font-extrabold">
              {data?.title + " " + "(" + data?.itemCards?.length + ")"}
            </span>
            <span className="text-lg text-gray-500">🇻</span>
          </div>
          {showItems && <ItemList items={data?.itemCards} />}
        </div>
      </div>
    );
}

export default RestaurantCategory;