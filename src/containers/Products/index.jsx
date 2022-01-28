import { Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
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
  const {products, loading}  = useSelector((state) => state.products);
  const renderProducts = () => {
    console.log('prod',products);
    return (products || []).slice(0,16).map((product, index) => <Product key={index} product={product} />);
  };
  return (
    <Container span={24}>
      <Title>Products</Title>
      <ButtonContainer>
        <StyledButton>mug</StyledButton>
        <StyledButton marginLeft="5px">tshirt</StyledButton>
      </ButtonContainer>
      <ProductListContainer flex="auto" span={24}>
        <Row>
          {!loading && renderProducts()}
        </Row>
      </ProductListContainer>
      <Pagination />
    </Container>
  );
};

export default Products;
