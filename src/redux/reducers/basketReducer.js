import * as types from "../types/basketTypes";

const initialState = {
  basketItems: [],
};

const isProductExist = (product, basketItems) => {
  return basketItems.some((basketItem) => basketItem.item.added === product.added);
};

export const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_ITEM_TO_BASKET: {
      if (!isProductExist(state.basketItems, payload)) {
        const newBasketItem = { item: payload, quantity: 1 };
        return {
          basket: state.basket.concat(newBasketItem),
        };
      }
      return state;
    }

    case types.INCREMENT_ITEM_COUNT: {
      const updatedBasket = state.basketItems.map((basketItem) => {
        if (basketItem.item.added === payload.added) {
          return { ...basketItem, quantity: basketItem.quantity++ };
        }
        return basketItem;
      });
      return { basketItems: updatedBasket };
    }

    case types.DECREMENT_ITEM_COUNT: {
      const selectedItem = state.basketItems.find(
        (basketItem) => basketItem.item.added === payload.added
      );
      if (selectedItem?.quantity === 1) {
        const filteredBasket = state.basketItems.filter(
          (basketItem) => basketItem.item.added !== payload.added
        );
        return { basketItems: filteredBasket };
      } else {
        const updatedBasket = state.basketItems.map((basketItem) => {
          if (basketItem.item.added === payload.added) {
            return { ...basketItem, quantity: basketItem.quantity - 1 };
          }
          return basketItem;
        });
        return { basketItems: updatedBasket };
      }
    }
    default:
      return state;
  }
};
