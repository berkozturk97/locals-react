import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons/lib/icons';
import { Pagination, Row } from 'antd';
import styled from 'styled-components';

export const ArrowLeft = styled(ArrowLeftOutlined)`
  color: #697488;
  margin-right: 5px;
`;

export const ArrowRight = styled(ArrowRightOutlined)`
  color: #697488;
  margin-left: 5px;
`;

export const PaginationText = styled.div`
  color: #697488;
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  *:hover {
    color: #1ea4ce;
  }
`;

export const Container = styled(Row)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: space-between;

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
