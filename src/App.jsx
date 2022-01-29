import { Row, Col } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from './containers/Filters';
import Header from './containers/Header';
import { StyledContent, StyledLayout } from './containers/Layout/layout-style';
import Products from './containers/Products';
import BasketList from './containers/BasketList';
import {
  GET_PRODUCT_REQUESTED,
  GET_BRAND_AND_TAG_REQUESTED,
} from './redux/types/productTypes';

function App() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.products.filter);

  useEffect(() => {
    dispatch({ type: GET_BRAND_AND_TAG_REQUESTED, payload: { query: filter, limitless: true } });
  }, [filter.itemType]);

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_REQUESTED, payload: { query: filter } });
  }, [filter]);

  return (
    <StyledLayout>
      <Header />
      <StyledContent>
        <Row gutter={16}>
          <Col xs={0} sm={0} md={8} lg={8} xl={6}>
            <Filters />
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={12}>
            <Products />
          </Col>
          <Col xs={0} sm={0} md={0} lg={0} xl={6}>
            <BasketList />
          </Col>
        </Row>
      </StyledContent>
    </StyledLayout>
  );
}

export default App;
