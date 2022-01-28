import { Col, Row } from "antd";
import React from "react";
import { StyledImage } from "../../../components/image";
import ButtonGroup from "../../ButtonGroups";
import {
  Container,
  ImageContainer,
  ProductInfoContainer,
  ProductPrice,
  ProductTitle,
} from "./product-style";

const Product = ({ product: { price, name }, index }) => {
  return (
    <Container key={index} xs={24} sm={12} md={12} lg={6} xl={6}>
      <ImageContainer>
        <StyledImage src={`https://picsum.photos/300/300?random=${index}`}/>
      </ImageContainer>
      <ProductInfoContainer>
        <ProductPrice>₺ {price}</ProductPrice>
        <ProductTitle>{name}</ProductTitle>
      </ProductInfoContainer>

      <ButtonGroup />
    </Container>
  );
};

export default Product;
