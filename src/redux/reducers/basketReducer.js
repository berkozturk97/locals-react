import * as types from '../types/basketTypes';

const initialState = {
  basketItems: [],
  totalPrice: 0,
};

const grandTotal = (basketItems) => {
  if (basketItems.length > 0) {
    return basketItems.reduce((sum, basket) => sum + (basket.item.price * basket.quantity), 0);
  }
  return 0;
};

const isProductExist = (product, basketItems) => basketItems.some((basketItem) => basketItem.item.name === product);

export const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_ITEM_TO_BASKET: {
      if (!isProductExist(payload.name, state.basketItems)) {
        const newBasketItem = { item: payload, quantity: 1 };
        return {
          ...state,
          basketItems: state.basketItems.concat(newBasketItem),
          totalPrice: grandTotal(state.basketItems.concat(newBasketItem)),
        };
      }
      const updatedBasket = state.basketItems.map((basketItem) => {
        if (basketItem.item.name === payload.name) {
          const quantity = basketItem.quantity + 1;
          return { ...basketItem, quantity };
        }
        return basketItem;
      });
      return {
        ...state,
        basketItems: updatedBasket,
        totalPrice: grandTotal(updatedBasket),
      };
    }

    case types.REMOVE_ITEM_FROM_BASKET: {
      const selectedItem = state.basketItems.find(
        (basketItem) => basketItem.item.name === payload.name,
      );
      if (selectedItem?.quantity === 1) {
        const filteredBasket = state.basketItems.filter(
          (basketItem) => basketItem.item.name !== payload.name,
        );
        return {
          ...state,
          basketItems: filteredBasket,
          totalPrice: grandTotal(filteredBasket),
        };
      }
      const updatedBasket = state.basketItems.map((basketItem) => {
        if (basketItem.item.name === payload.name) {
          return { ...basketItem, quantity: basketItem.quantity - 1 };
        }
        return basketItem;
      });
      return {
        ...state,
        basketItems: updatedBasket,
        totalPrice: grandTotal(updatedBasket),
      };
    }
    default:
      return state;
  }
};
