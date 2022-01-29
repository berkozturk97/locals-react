import { Button } from 'antd';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  width: 60px;
  height: 30px;
  text-align: center;
  font-size: 13px;
  color: #1ea4ce;
  background-color: #f2f0fd;
  &:hover,
  &:active,
  &:focus {
    background-color: #1ea4ce;
    color: #ffffff;
  }
`;

export const AddButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 22px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 12px;
  margin-top: 10px;
  background-color: #1ea4ce;
  color: #ffffff;
  &:hover,
  &:active,
  &:focus {
    background-color: #1ea4ce;
    color: #ffffff;
  }
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
