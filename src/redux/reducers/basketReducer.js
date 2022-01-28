import * as types from "../types/basketTypes";

const initialState = {
  basketItems: [],
};

export const reducer = (state = initialState, {type, action}) => {
  switch (type) {
    case types.ADD_ITEM_TO_BASKET:
      return { ...state, 
        basketItems: basketItems.concat(payload)
    };

    case types.INCREMENT_ITEM_COUNT:
      return {
        ...state,
      };

    case types.DECREMENT_ITEM_COUNT:
      return { ...state,};

    default:
      return state;
  }
};
