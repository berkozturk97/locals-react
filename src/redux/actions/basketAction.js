import * as types from '../types/basketTypes';


export default function addItemToBasket(payload){
    return { type: types.ADD_ITEM_TO_BASKET, payload: payload }
}

export default function incrementItemCount(payload){
    return { type: types.INCREMENT_ITEM_COUNT, payload: payload }
}

export default function decrementItemCount(payload){
    return { type: types.DECREMENT_ITEM_COUNT, payload: payload }
}