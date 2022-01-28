import { Col, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updatePage } from "../../redux/actions/productAction";
import { GET_PRODUCT_REQUESTED } from "../../redux/types/productTypes";
import { ArrowContainer, ArrowLeft, ArrowRigt, StyledPagination } from "./pagination-style";

const Pagination = () => {
  const {totalProductCount, filter} = useSelector((state) => state.products);
  const dispatch = useDispatch()
  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <ArrowContainer marginRight='10px'>
          <ArrowLeft /> <a>Previous</a>
        </ArrowContainer>
      );
    }
    if (type === "next") {
      return (
        <ArrowContainer marginLeft='10px'>
          <a>Next</a> <ArrowRigt /> 
        </ArrowContainer>
      );
    }
    return originalElement;
  };
  const onPageChange = (e) => {
    dispatch(updatePage(e))
    dispatch({type: GET_PRODUCT_REQUESTED, payload: { query: filter} })
  }
  return (
    //unutma inline
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
};

export default Pagination;
