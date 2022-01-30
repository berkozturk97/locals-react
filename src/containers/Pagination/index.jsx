import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Global } from '../../constants/global';
import { updateFilterOptions } from '../../redux/actions/productAction';
import {
  ArrowContainer,
  ArrowLeft,
  ArrowRight,
  Container,
  PaginationText,
  StyledPagination,
} from './pagination-style';

function Pagination() {
  const { totalProductCount, filter } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return (
        <ArrowContainer>
          <PaginationText><ArrowLeft />{Global.PREV}</PaginationText>
        </ArrowContainer>
      );
    }
    if (type === 'next') {
      return (
        <ArrowContainer>
          <PaginationText>{Global.NEXT} <ArrowRight /></PaginationText>
        </ArrowContainer>
      );
    }

    return originalElement;
  };

  const onPageChange = (pageNumber) => {
    dispatch(updateFilterOptions({ _page: pageNumber }));
  };

  return (
    <Container>
      <StyledPagination
        onChange={onPageChange}
        showSizeChanger={false}
        total={totalProductCount}
        pageSize={16}
        responsive
        current={filter._page}
        itemRender={itemRender}
      />
    </Container>
  );
}

export default Pagination;
