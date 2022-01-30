import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddButton, CountButton } from '../../components/button';
import { Global } from '../../constants/global';
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
          <CountButton onClick={() => dispatch(removeItemFromBasket({ name }))}>{Global.MINUS_SIGN}</CountButton>
          <Count>
            <span>{quantity}</span>
          </Count>
          <CountButton onClick={() => dispatch(addItemToBasket({ name }))}>{Global.PLUS_SIGN}</CountButton>
        </Container>
      ) : <AddButton onClick={() => onItemAdd()}>{Global.ADD}</AddButton>}

    </div>

  );
}

export default ButtonGroup;
