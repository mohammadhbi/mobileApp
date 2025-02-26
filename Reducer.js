import {
    actionType
} from "./Action";

export const initialState = {
    items: [],
    originalItems: [],
    isLoding: false,
    isError: false,
    totalPrice: 0
};

export const reducer = (state, action) => {
    if (action.type === actionType.SET_LOADING) {
        return {
            ...state,
            isLoding: action.payload
        };
    }
    if (action.type === actionType.SET_ITEM) {
        return {
            ...state,
            items: action.payload
        };
    }
    if (action.type === actionType.SET_ERROR) {
        return {
            ...state,
            isError: action.payload
        };
    }
    if (action.type === actionType.CLEAR_LIST) {
        return {
            ...state,
            items: [],
            totalPrice: 0,
        };
    }
    if (action.type === actionType.SET_ORIGINAL_ITEM) {
        return {
            ...state,
            originalItems: action.payload
        };
    }
    if (action.type === actionType.ADD_LIST) {
        return {
            ...state,
            items: state.originalItems
        };
    }
    if (action.type === actionType.REMOVE_ITEM) {
        let newItem = state.items.filter((item) => item.id !== action.payload.id);
        return {
            ...state,
            items: newItem,
            totalPrice: newItem.reduce((total, item) => total + (item.counter || 0) * item.attributes.price, 0),
        };
    }
    if (action.type === actionType.INCREASE) {
        const updatedItems = state.items.map((item) =>
            item.id === action.payload.id ?
            {
                ...item,
                counter: (item.counter || 0) + 1
            } :
            item
        );
        return {
            ...state,
            items: updatedItems,
            totalPrice: updatedItems.reduce((total, item) => total + (item.counter || 0) * item.attributes.price, 0),
        };
    }
    if (action.type === actionType.DECREASE) {
        const updatedItems = state.items.map((item) =>
            item.id === action.payload.id && (item.counter || 0) > 0 ?
            {
                ...item,
                counter: (item.counter || 0) - 1
            } :
            item
        );
        return {
            ...state,
            items: updatedItems,
            totalPrice: updatedItems.reduce((total, item) => total + (item.counter || 0) * item.attributes.price, 0),
        };
    }

    return state;
};