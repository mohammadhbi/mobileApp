import { actionType } from "./Action";
export const initialsState={
    items: [],
    originalItems: [], 
    isLoding: false,
    isError: false
};
export const reducer =(state, action)=>{
    if( action.type ===actionType.SET_LOADING){
        return {...state , isLoding: action.payload};
}
if (action.type === actionType.SET_ITEM){
    return {...state, items: action.payload};
}
if(action.type===actionType.SET_ERROR){
    return{...state, isError: action.payload};
}
if(action.type===actionType.CLEAR_LIST){
    return{...state, items:[]};
}
if(action.type===actionType.SET_ORIGINAL_ITEM){
    return {...state, originalItems:action.payload };
}
if(action.type===actionType.ADD_LIST){
    return{...state, items: state.originalItems};
}
if(action.type===actionType.REMOVE_ITEM){
    let newItem= state.items.filter((item)=>item.id !==action.payload.id)
    return{...state,items :newItem };
}
}