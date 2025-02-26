import { useContext } from "react";
import Button from "./button";
import { CounterContext } from "./productsLIst";
const Product = (item) => {
  const { price, company, image, title } = item.attributes;
  const { removeItem, id, counter = 0, totalPrice } = item;
  const { increase, decrease } = useContext(CounterContext);
  console.log(item);
  return (
    <div className="p-4 shadow border border-gray-200 rounded mb-1.5 flex justify-between ">
      <div className="flex">
        <img
          src={image}
          alt="title"
          className="w-[60px] h-[60px] rounded-full border-4"
        />
        <div className="ml-2 "> 
          <h1 className="font-bold my-2">{title}</h1>
             <div className="flex justify-baseline mt-2 gap-2">
                <h1>
                    {price} $
                </h1>
                <Button text="remove" onClick={() => removeItem(id)} />
             </div>
        </div>
      </div>
      <div>
        <p>Counter: {counter || 0}</p>
        <Button text="+" onClick={() => increase(id)} />
        <Button text="-" onClick={() => decrease(id)} />
      </div>
 
    </div>
    
  );
};
export default Product;
