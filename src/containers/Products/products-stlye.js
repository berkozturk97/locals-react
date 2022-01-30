import { Col, Row } from 'antd';
import styled from 'styled-components';

export const Container = styled(Col)`
  width: 100%;
  padding: 0 !important;
  border-radius: 2px;
`;

export const ProductListWrapper = styled(Row)`
  padding: 20px 9px;
  margin-left: 0px !important;
  margin-right: 0px !important;

  @media screen and (max-width: 576px) {
    background-color: #fafafa;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  color: #6f6f6f;
`;

export const ButtonContainer = styled.div`
  width: 130px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;

export const ProductListContainer = styled(Col)`
  background-color: #ffffff;
  margin-top: 16px;

  @media screen and (max-width: 576px) {
    background-color: #fafafa;
  }
`;
