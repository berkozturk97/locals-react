import { Button } from 'antd';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  width: 60px;
  height: 30px;
  text-align: center;
  font-size: 13px;
  color: #1ea4ce;
  background-color: #f2f0fd;
  &:hover {
    color: #f2f0fd;
    background-color: #1ea4ce;
  }
`;

export const AddButton = styled(Button)`
  width: 90%;
  margin-top: 10px;
  background-color: #1ea4ce;
  color: #ffffff;
`;

export const CountButton = styled(Button)`
  height: 32px;
  width: 32px;
  border: none;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  color: #1ea4ce;
  &:hover {
    background-color: transparent;
  }
  &:active {
    background-color: transparent;
  }
`;
