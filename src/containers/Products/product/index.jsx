import React from 'react';
import { Row } from 'antd';
import { useDispatch } from 'react-redux';
import { AddButton } from '../../../components/button';
import { StyledImage } from '../../../components/image';
import { addItemToBasket } from '../../../redux/actions/basketAction';
import { Global } from '../../../constants/global';
import {
  Container,
  ImageContainer,
  ProductPrice,
  ProductTitle,
} from './product-style';

function Product({ product: { price, name }, image }) {
  const dispatch = useDispatch();

  const onItemAdd = () => {
    dispatch(addItemToBasket({ name, price }));
  };

  return (
    <Container xs={12} sm={12} md={12} lg={8} xl={6}>
      <Row justify="center">
        <ImageContainer>
          <StyledImage src={image} />
        </ImageContainer>
      </Row>
      <Row>
        <ProductPrice>₺ {price}</ProductPrice>
      </Row>
      <Row>
        <ProductTitle>{name}</ProductTitle>
      </Row>
      <AddButton onClick={() => onItemAdd()}>{Global.ADD}</AddButton>
    </Container>
  );
}

export default Product;
