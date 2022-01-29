import { Checkbox } from 'antd';
import styled from 'styled-components';

export const StyledCheckbox = styled(Checkbox)`
 width: 100%;
 .ant-checkbox-checked .ant-checkbox-inner {
  background-color: #1EA4CE;
  border-color: #1EA4CE;
}
`;

export const CheckboxContainer = styled.div`
margin-top: 10px;
max-height: 150px;
overflow: auto;
&::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 6px;
  }
 .ant-checkbox-wrapper + .ant-checkbox-wrapper {
     margin-left: 0;
 }
`;
