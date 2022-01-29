import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons/lib/icons';
import { Pagination } from 'antd';
import styled from 'styled-components';

export const ArrowLeft = styled(ArrowLeftOutlined)`
  color: #1ea4ce;
`;
export const ArrowRigt = styled(ArrowRightOutlined)`
  color: #1ea4ce;
`;
export const ArrowContainer = styled.div`
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)};
`;
export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledPagination = styled(Pagination)`
  .ant-pagination-item {
    border: none;
    outline: none;
    background-color: transparent;
  }
  .ant-pagination-item a {
    color: #697488;
  }
  .ant-pagination-item-active a {
    background-color: #1ea4ce;
    color: white;
  }
  .ant-pagination-prev-active a {
    color: #1ea4ce !important;
  }
  .ant-pagination-next-active a {
    color: #1ea4ce;
  }
  .ant-pagination-prev a {
    color: #697488;
  }
  .ant-pagination-next a {
    color: #697488;
  }
`;
