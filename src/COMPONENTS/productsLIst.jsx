import { useEffect, useReducer } from "react";
import client from "../Lib/axios";
import { actionType } from "../../Action";
const productsLIst = () => {
const [state , dispatch]=useReducer(reducer, initialsState);
const {items , isError, isLoading}= state
const getDataFromAPI= async () =>{
    try {
        dispatch({type:actionType.SET_LOADING, payload:true });
        const {data}= await client.get("/api/products");
        dispatch({type: actionType.SET_ITEM , payload: data.products});
        dispatch({type: actionType.SET_ORIGINAL_ITEM, payload: data.products});
    } catch (error) {
        console.log(error);
        dispatch({type: actionType.SET_ERROR, payload:true})
        
    }finally{
        dispatch({type: actionType.SET_LOADING, payload:false});
        
    }
};
useEffect(() => {
  getDataFromAPI();
}, []);
    return (
    <div>
      
    </div>
  )
}

export default productsLIst
