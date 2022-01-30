import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 6px solid #1ea4ce;
  min-height: 100px;
  border-radius: 2px;
  padding: 16px;
  margin-top: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const OrderedItemContainer = styled.div`
  width: 100%;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TotalPrice = styled.div`
  background: #ffffff;
  border: 2px solid #1ea4ce;
  box-sizing: border-box;
  border-radius: 2px;
  width: 90px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1ea4ce;
  font-weight: 600;
`;

export const EmptyInfo = styled.div`
  color: #191919;
  font-weight: 600;
`;
