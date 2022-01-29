import React from 'react';
import { useDispatch } from 'react-redux';
import { AddButton } from '../../../components/button';
import { StyledImage } from '../../../components/image';
import { addItemToBasket } from '../../../redux/actions/basketAction';
import {
  Container,
  ImageContainer,
  ProductInfoContainer,
  ProductPrice,
  ProductTitle,
} from './product-style';

function Product({ product: { price, name }, image }) {
  const dispatch = useDispatch();
  const onItemAdd = () => {
    dispatch(addItemToBasket({ name, price }));
  };
  return (
    <Container xs={24} sm={12} md={12} lg={6} xl={6}>
      <ImageContainer>
        <StyledImage src={image} />
      </ImageContainer>
      <ProductInfoContainer>
        <ProductPrice>
          ₺
          {price}
        </ProductPrice>
        <ProductTitle>{name}</ProductTitle>
      </ProductInfoContainer>

      <AddButton onClick={() => onItemAdd()}>Add</AddButton>
    </Container>
  );
}

export default Product;
