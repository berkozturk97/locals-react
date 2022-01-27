import { Divider } from "antd";
import React from "react";
import ButtonGroup from "../ButtonGroups";
import { ProductPrice, ProductTitle } from "../Products/product/product-style";
import {
  Container,
  ItemContainer,
  OrderedItemContainer,
  TotalPrice,
  TotalPriceContainer,
} from "./basket-list-style";

const BasketList = () => {
  return (
    <Container>
      <ItemContainer>
        <OrderedItemContainer>
          <ProductTitle>Example Product</ProductTitle>
          <ProductPrice>₺ 16.99</ProductPrice>
        </OrderedItemContainer>
        <ButtonGroup test={"test"} />
      </ItemContainer>
      <Divider />
      <ItemContainer>
        <OrderedItemContainer>
          <ProductTitle>Example Product</ProductTitle>
          <ProductPrice>₺ 16.99</ProductPrice>
        </OrderedItemContainer>
        <ButtonGroup test={"test"} />
      </ItemContainer>
      <Divider />
      <ItemContainer>
        <OrderedItemContainer>
          <ProductTitle>Example Product</ProductTitle>
          <ProductPrice>₺ 16.99</ProductPrice>
        </OrderedItemContainer>
        <ButtonGroup test={"test"} />
      </ItemContainer>
      <Divider />
      <ItemContainer>
        <OrderedItemContainer>
          <ProductTitle>Example Product</ProductTitle>
          <ProductPrice>₺ 16.99</ProductPrice>
        </OrderedItemContainer>
        <ButtonGroup test={"test"} />
      </ItemContainer>
      <Divider />
      <ItemContainer>
        <OrderedItemContainer>
          <ProductTitle>Example Product</ProductTitle>
          <ProductPrice>₺ 16.99</ProductPrice>
        </OrderedItemContainer>
        <ButtonGroup test={"test"} />
      </ItemContainer>
      <Divider />
      <ItemContainer>
        <OrderedItemContainer>
          <ProductTitle>Example Product</ProductTitle>
          <ProductPrice>₺ 16.99</ProductPrice>
        </OrderedItemContainer>
        <ButtonGroup test={"test"} />
      </ItemContainer>
      <Divider />

      <TotalPriceContainer>
        <TotalPrice>₺ 30.65</TotalPrice>
      </TotalPriceContainer>
    </Container>
  );
};

export default BasketList;
