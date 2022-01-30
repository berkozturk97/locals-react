import { FilterOutlined } from '@ant-design/icons/lib/icons';
import { Layout } from 'antd';
import styled from 'styled-components';

export const Container = styled(Layout.Header)`
  width: 100%;
  height: 76px;
  background-color: #1ea4ce;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 104px;
`;

export const FilterIconContainer = styled.div`
  position: absolute;
  left: 5%;
`;

export const FilterIcon = styled(FilterOutlined)`
  color: #ffffff;
  font-size: 20px;
`;

export const LogoImg = styled.img`
  @media screen and (max-width: 576px) {
    margin-right: 10px;
  }
`;

export const HeaderBasketContainer = styled.div`
  position: absolute;
  right: 8%;
  height: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-color: #147594;
  font-size: 14px;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    right: 0;
  }

  @media screen and (min-width: 1200px) {
    cursor: initial;
  }
`;
