import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledButton } from '../../components/button';
import { ItemTypes } from '../../constants/item-types';
import { updateFilterOptions } from '../../redux/actions/productAction';
import { Global } from '../../constants/global';
import {
  ButtonContainer,
  Container,
  ProductListContainer,
  ProductListWrapper,
  Title,
} from './products-stlye';
import Pagination from '../Pagination';
import Product from './product';
import ProductLoading from './product-loading';

function Products() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  const handleClickButton = (item) => {
    dispatch(
      updateFilterOptions({
        itemType: item,
        _page: 1,
        tags_like: undefined,
        manufacturer_like: undefined,
      }),
    );
  };

  const renderProducts = () => products.map((product, i) => (
    <Product
      key={`prod_${product.name}`}
      product={product}
      image={`${Global.RANDOM_IMG_URL}${i}`}
    />
  ));

  return (
    <Container span={24}>
      <Title>Products</Title>
      <ButtonContainer>
        <StyledButton onClick={() => handleClickButton(ItemTypes.MUG)}>
          {ItemTypes.MUG}
        </StyledButton>
        <StyledButton
          onClick={() => handleClickButton(ItemTypes.SHIRT)}
        >
          {ItemTypes.SHIRT}
        </StyledButton>
      </ButtonContainer>

      <ProductListContainer flex="auto" span={24}>
        <ProductListWrapper gutter={[24, 20]}>{loading ? <ProductLoading /> : renderProducts()}</ProductListWrapper>
      </ProductListContainer>
      {!loading && <Pagination />}
    </Container>
  );
}

export default Products;
