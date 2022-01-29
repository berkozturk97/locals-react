import * as types from '../types/basketTypes';

export const addItemToBasket = (payload) => ({ type: types.ADD_ITEM_TO_BASKET, payload });

export const incrementItemCount = (payload) => ({ type: types.INCREMENT_ITEM_COUNT, payload });

export const decrementItemCount = (payload) => ({ type: types.DECREMENT_ITEM_COUNT, payload });
