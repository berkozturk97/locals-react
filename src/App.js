import Filters from "./containers/Filters";
import Header from "./containers/Header";
import { StyledContent, StyledLayout } from "./containers/Layout/layout-style";
import Products from "./containers/Products";
import { Row, Col } from "antd";
import BasketList from "./containers/BasketList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_PRODUCT_REQUESTED,
  GET_TOTAL_PRODUCT_COUNT_REQUESTED,
} from "./redux/types/productTypes";

function App() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.products.filter);
  
  useEffect(() => {
    dispatch({ type: GET_TOTAL_PRODUCT_COUNT_REQUESTED });
  }, []);

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_REQUESTED, payload: { query: filter } });
  }, [filter]);

  return (
    <StyledLayout>
      <Header />
      <StyledContent>
        <Row gutter={16}>
          <Col xs={0} sm={0} md={8} lg={8} xl={5}>
            <Filters />
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={12}>
            <Products />
          </Col>
          <Col xs={0} sm={0} md={0} lg={0} xl={7}>
            <BasketList />
          </Col>
        </Row>
      </StyledContent>
    </StyledLayout>
  );
}

export default App;
