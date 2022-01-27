import { Col, Row } from "antd";
import React from "react";
import { ArrowContainer, ArrowLeft, ArrowRigt, StyledPagination } from "./pagination-style";

const Pagination = () => {
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
  return (
    <Row style={{ marginTop: 20 }} justify="center">
      <StyledPagination
        showSizeChanger={false}
        total={500}
        pageSize={16}
        itemRender={itemRender}
      />
    </Row>
  );
};

export default Pagination;
