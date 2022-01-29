import { Col } from 'antd';
import styled from 'styled-components';

export const Container = styled(Col)`
  margin-top: 20px;
`;
export const ImageContainer = styled.div`
  border: 1.17666px solid #f3f0fe;
  background-color: #fefefe;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`;
export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85px;
`;
export const ProductPrice = styled.div`
  color: #1ea4ce;
  font-size: 14px;
  font-weight: 700;
  margin-top: 8px;
`;
export const ProductTitle = styled.div`
  color: #191919;
  font-size: 14px;
  font-weight: 600;
  width: 80%;
  height: 100%;
`;
