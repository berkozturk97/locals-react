import { Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterOptions } from '../../redux/actions/productAction';
import {
  ArrowContainer,
  ArrowLeft,
  ArrowRigt,
  StyledPagination,
} from './pagination-style';

function Pagination() {
  const { totalProductCount, filter } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return (
        <ArrowContainer marginRight="10px">
          <ArrowLeft />
          <div>Previous</div>
        </ArrowContainer>
      );
    }
    if (type === 'next') {
      return (
        <ArrowContainer marginLeft="10px">
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
    // unutma inline
    <Row style={{ marginTop: 20 }} justify="center">
      <StyledPagination
        onChange={onPageChange}
        showSizeChanger={false}
        total={totalProductCount}
        pageSize={16}
        current={filter._page}
        itemRender={itemRender}
      />
    </Row>
  );
}

export default Pagination;
