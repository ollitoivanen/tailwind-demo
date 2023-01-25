function Product({
  product: { title, price, description, category, image }, addToBasket
}: any) {
  return (
    <div className="bg-blue-light flex md:w-1/2 lg:w-1/3 w-full">
      <div className="flex m-1 border-2 rounded-lg bg-white w-full p-2 border-black">
        <div className="w-1/3 overflow-hidden p-4">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="bg-contain bg-no-repeat bg-center w-full h-full"
          ></div>
        </div>
        <div className="w-2/3">
          <h1 className="font-bold">{title.substr(0, 50)}</h1>
          <a className="">{category}</a>
          <p className="">{price}$</p>
          <div className="">{description.substr(0, 100)}</div>
          <button onClick={()=> addToBasket()} className="bg-black rounded m-2 w-2/3 hover:bg-gray-600">
            <p className="text-white m-2">Add</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product;
