import Button from "./button";

const Product = (item) => {
     const {price, company, image, title }=item.attributes;
     const {removeItem, id} =item
     
    console.log(item);
  return (
    <div className="p-4 shadow border border-gray-200 rounded mb-1.5 flex">
       <img src={image} alt="title"
        className="w-[60px] h-[60px] rounded-full border-4"
         />
       <h1 className="font-bold my-2">{title}</h1>
       <Button text="remove" onClick={() => removeItem(id)} />
    </div>
  )
}

export default Product

