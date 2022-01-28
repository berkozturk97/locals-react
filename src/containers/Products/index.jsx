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
  const { products, loading, filter } = useSelector((state) => state.products);
  const renderProducts = () => {
    return products.map((product, i) => (
      <Product
        key={`prod_${i}`}
        product={product}
        image={`https://picsum.photos/300/300?random=${i}`} />
    ));
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
      <Pagination total={products.length} />
    </Container>
  );
};

export default Products;
