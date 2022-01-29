import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddButton, CountButton } from '../../components/button';
import { addItemToBasket, removeItemFromBasket } from '../../redux/actions/basketAction';
import { Container, Count } from './button-groups-style';

function ButtonGroup({ price, name, quantity }) {
  const { basketItems } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const isItemExist = basketItems.some((basketItem) => basketItem.item.name === name);

  const onItemAdd = () => {
    dispatch(addItemToBasket({ name, price }));
  };
  return (
    <div>
      {isItemExist ? (
        <Container>
          <CountButton onClick={() => dispatch(removeItemFromBasket({ name }))}>-</CountButton>
          <Count>
            <span>{quantity}</span>
          </Count>
          <CountButton onClick={() => dispatch(addItemToBasket({ name }))}>+</CountButton>
        </Container>
      ) : <AddButton onClick={() => onItemAdd()}>Add</AddButton>}

    </div>

  );
}

export default ButtonGroup;
