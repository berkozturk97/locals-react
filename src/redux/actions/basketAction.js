import * as types from '../types/basketTypes';


export const addItemToBasket = (payload) => {
    return { type: types.ADD_ITEM_TO_BASKET, payload: payload }
}

export const incrementItemCount = (payload) => {
    return { type: types.INCREMENT_ITEM_COUNT, payload: payload }
}

export const decrementItemCount = (payload) => {
    return { type: types.DECREMENT_ITEM_COUNT, payload: payload }
}