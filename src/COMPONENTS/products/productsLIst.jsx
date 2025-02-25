import { useEffect, useReducer } from "react";
import { client } from "../../Lib/axios";
import { actionType } from "../../../Action";
import { reducer } from "../../../Reducer";
import { initialState } from "../../../Reducer";
import Product from "./product";
import Loadaing from "./Loading";
import Button from "./button";
import EmptyProduct from "./EmptyProduct";
import axios from "axios";
const ProductsLIst = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { items, isError, isLoading } = state;

  
  const getDataFromAPI = async () => {
    try {
      dispatch({ type: actionType.SET_LOADING, payload: true });  
      const response = await axios.get("https://strapi-store-server.onrender.com/api/products");
      const data = response.data.data || [];
       console.log(data);
      
      dispatch({ type: actionType.SET_ITEM, payload: data});
      dispatch({ type: actionType.SET_ORIGINAL_ITEM, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.SET_ERROR, payload: true });
    } finally {
      dispatch({ type: actionType.SET_LOADING, payload: false });
    }
  };
  useEffect(() => {
    getDataFromAPI();
  }, []);
  if (isError) {
    return <h1>errorrr!!!!</h1>;
  }
  const clearList = () => {
    dispatch({ type: actionType.CLEAR_LIST });
  };
  const addList = () => {
    dispatch({ type: actionType.ADD_LIST });
  };
  const removeItem = (id) => {
    dispatch({ type: actionType.REMOVE_ITEM, payload: {id} });
  };
console.log(items);

  return (
    <main className="m-16">
      {isLoading ? (
        <Loadaing />
      ) : (
        <div>
          {items.map((item) => {
            return <Product key={item.id} {...item} removeItem={removeItem} />;
          })}
        </div>
      )}
      <div className="my-8 flex justify-center">
        {items.length > 0 ? (
          <Button text="removeall" onClick={clearList} />
        ) : (
          <EmptyProduct addList={addList} />
        )}
      </div>
    </main>
  );
};

export default ProductsLIst;
