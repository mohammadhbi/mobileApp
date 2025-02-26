import { useContext } from "react";
import Button from "./button";
import { CounterContext } from "./productsLIst";
import TrashCan from "../../assets/TrashCan.svg"
const Product = (item) => {
  const { price, company, image, title } = item.attributes;
  const { removeItem, id, counter = 0, totalPrice } = item;
  const { increase, decrease } = useContext(CounterContext);
  console.log(item);
  return (
    <div className="p-4 shadow border border-gray-100 rounded-2xl mb-1.5 flex justify-between ">
      <div className="flex">
        <img
          src={image}
          alt="title"
          className="w-[100px] h-[100px] rounded-2xl border-4"
        />
        <div className="ml-2 "> 
          <h1 className="font-bold my-2">{title}</h1>
             <div className="flex justify-baseline mt-2 gap-2">
                <h1>
                    {price} $
                </h1>
                <img src={TrashCan} onClick={() => removeItem(id)} />
             </div>
        </div>
      </div>
      <div className="mt-1 flex flex-row-reverse gap-x-2 ">
       <button className="btn btn-warning" onClick={() => increase(id)} >+</button>
        <p>{counter || 0}</p>
       <button className="btn btn-active btn-neutral" onClick={() => decrease(id)}> -</button>
      </div>
 
    </div>
    
  );
};
export default Product;
