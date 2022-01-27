import { Row } from "antd";
import React from "react";
import { StyledButton } from "../../components/button";
import Pagination from "../Pagination";
import Product from "./product";
import {
  ButtonContainer,
  Container,
  ProductListContainer,
  Title,
} from "./products-stlye";

const Products = () => {
  return (
    <Container span={24}>
      <Title>Products</Title>
      <ButtonContainer>
        <StyledButton>mug</StyledButton>
        <StyledButton marginLeft="5px">tshirt</StyledButton>
      </ButtonContainer>
      <ProductListContainer flex='auto' span={24}>
        <Row>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Row>
      </ProductListContainer>
      <Pagination />
    </Container>
  );
};

export default Products;
