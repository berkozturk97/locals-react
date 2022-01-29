import { Divider } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import ButtonGroup from '../ButtonGroups';
import { ProductPrice, ProductTitle } from '../Products/product/product-style';
import {
  Container,
  EmptyInfo,
  ItemContainer,
  OrderedItemContainer,
  TotalPrice,
  TotalPriceContainer,
} from './basket-list-style';

function BasketList() {
  const { basketItems, totalPrice } = useSelector((state) => state.basket);

  const renderBasketItems = () => basketItems.map((basket) => (
    <>
      <ItemContainer key={`b_${basket.item.name}`}>
        <OrderedItemContainer>
          <ProductTitle>{basket.item.name}</ProductTitle>
          <ProductPrice>{basket.item.price}</ProductPrice>
        </OrderedItemContainer>
        <ButtonGroup price={basket.item.price} name={basket.item.name} quantity={basket.quantity} />
      </ItemContainer>
      <Divider />
    </>
  ));

  return (
    <Container>
      {basketItems.length > 0
        ? (
          <>
            {renderBasketItems()}
            <TotalPriceContainer>
              <TotalPrice>
                ₺
                {' '}
                {totalPrice.toFixed(2)}
              </TotalPrice>
            </TotalPriceContainer>
          </>
        ) : <EmptyInfo>The basket is empty!</EmptyInfo> }

    </Container>
  );
}

export default BasketList;
