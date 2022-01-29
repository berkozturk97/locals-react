import * as types from '../types/basketTypes';

export const addItemToBasket = (payload) => ({ type: types.ADD_ITEM_TO_BASKET, payload });

export const removeItemFromBasket = (payload) => ({ type: types.REMOVE_ITEM_FROM_BASKET, payload });
