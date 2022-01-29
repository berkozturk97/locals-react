import { Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../../components/button";
import { ItemTypes } from "../../constants/item-types";
import { updateFilterOptions } from "../../redux/actions/productAction";
import Pagination from "../Pagination";
import Product from "./product";
import {
  ButtonContainer,
  Container,
  ProductListContainer,
  Title,
} from "./products-stlye";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  const handleClickButton = (item) => {
    dispatch(updateFilterOptions({ itemType: item, _page: 1 }));
  };

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
        <StyledButton onClick={()=> handleClickButton(ItemTypes.MUG)}>mug</StyledButton>
        <StyledButton onClick={()=> handleClickButton(ItemTypes.SHIRT)} marginLeft="5px">shirt</StyledButton>
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
