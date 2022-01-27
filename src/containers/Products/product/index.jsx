import { Col, Row } from "antd";
import React from "react";
import { StyledImage } from "../../../components/image";
import ButtonGroup from "../../ButtonGroups";
import { Container, ImageContainer, ProductPrice, ProductTitle } from "./product-style";

const Product = () => {
  return (
    <Container xs={24} sm={12} md={12} lg={6} xl={6}>
      <ImageContainer>
        <StyledImage />
      </ImageContainer>
      <ProductPrice>₺ 16.99</ProductPrice>
      <ProductTitle>Gorgeous Office Mug</ProductTitle>
      <ButtonGroup />
    </Container>
  );
};

export default Product;
