import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterOptions } from '../../redux/actions/productAction';
import {
  ArrowContainer,
  ArrowLeft,
  ArrowRigt,
  Container,
  StyledPagination,
} from './pagination-style';

function Pagination() {
  const { totalProductCount, filter } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return (
        <ArrowContainer>
          <ArrowLeft />
          <div>Previous</div>
        </ArrowContainer>
      );
    }
    if (type === 'next') {
      return (
        <ArrowContainer>
          <div>Next</div>
          <ArrowRigt />
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
        current={filter._page}
        itemRender={itemRender}
      />
    </Container>
  );
}

export default Pagination;
