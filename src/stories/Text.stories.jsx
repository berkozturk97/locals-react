import React from 'react';
import { PaginationText } from '../containers/Pagination/pagination-style';
import { ProductPrice, ProductTitle } from '../containers/Products/product/product-style';

export default {
  title: 'Texts',
  component: ProductPrice,
};

export const ProductPriceStory = () => <ProductPrice>₺ 10.65</ProductPrice>;

export const ProductTitleStory = () => <ProductTitle>Test Product</ProductTitle>;

export const PaginationTextStory = () => <PaginationText>Prev</PaginationText>;
