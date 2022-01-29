import { Checkbox } from 'antd';
import styled from 'styled-components';

export const StyledCheckbox = styled(Checkbox)`
 width: 100%;
 height: 100%;
 margin-bottom: 18px;
 .ant-checkbox-checked .ant-checkbox-inner {
  background-color: #1EA4CE;
  border-color: #1EA4CE;
  width: 22px;
  height: 22px;
}
.ant-checkbox .ant-checkbox-inner {
  width: 22px;
  height: 22px;
}
.ant-checkbox-inner::after {
  width: 9px;
  height: 13px;
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
