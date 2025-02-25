import Button from "./button"
const EmptyProduct = ({addList}) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-gray-500 text-6xl py-12">Your bag is empty</h1>
      <Button text="add All" onClick={addList} />
    </div>
  )
}

export default EmptyProduct
