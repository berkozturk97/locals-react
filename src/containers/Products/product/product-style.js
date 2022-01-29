import { Col } from 'antd';
import styled from 'styled-components';

export const Container = styled(Col)`
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 576px) {
    padding: 30px 0;
    border-radius: 2px;
    background-color: #ffffff;
  }
`;
export const ImageContainer = styled.div`
  border: 1.18px solid #f3f0fe;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 7px;
  text-align: left;
`;
export const ProductPrice = styled.div`
  color: #1ea4ce;
  font-size: 14px;
  font-weight: 700;
  height: 20px;
`;
export const ProductTitle = styled.div`
  color: #191919;
  font-size: 14px;
  font-weight: 600;
  height: 45px;
`;
