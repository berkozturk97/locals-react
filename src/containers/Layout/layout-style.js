import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

export const StyledContent = styled(Layout.Content)`
  width: 100% !important;
  padding: 0 104px;
  margin: auto;
  max-width: 1440px;
  margin-top: 40px;
  @media screen and (max-width: 992px) {
    padding: 0 30px;
  }
`;
