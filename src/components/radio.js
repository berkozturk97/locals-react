import styled from 'styled-components';
import { Radio } from 'antd';

export const StyledRadio = styled(Radio)`
  width: 100%;
  height: 25px;
  margin-top: 10px;
  & span {
    color: #525252;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: #1EA4CE !important ;
  }

  .ant-radio-checked .ant-radio-inner:after {
    background-color: #1EA4CE;
  }

  .ant-radio:hover .ant-radio-inner {
    border-color: #1EA4CE;
  }
`;
