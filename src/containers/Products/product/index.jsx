import React from 'react';
import { StyledImage } from '../../../components/image';
import ButtonGroup from '../../ButtonGroups';
import {
  Container,
  ImageContainer,
  ProductInfoContainer,
  ProductPrice,
  ProductTitle,
} from './product-style';

function Product({ product: { price, name }, image }) {
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

      <ButtonGroup />
    </Container>
  );
}

export default Product;
