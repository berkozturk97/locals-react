import Filters from "./containers/Filters";
import Header from "./containers/Header";
import { StyledContent, StyledLayout } from "./containers/Layout/layout-style";
import PriceList from "./containers/PriceList";
import Products from "./containers/Products";
import { Row, Col } from "antd";

function App() {
  return (
    <StyledLayout>
      <Header />
      <StyledContent>
        <Row gutter={16}>
          <Col xs={0} sm={0} md={8} lg={8} xl={6}>
            <Filters />
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={14}>
            <Products />
          </Col>
          <Col xs={0} sm={0} md={0} lg={0} xl={4}>
            <PriceList />
          </Col>
        </Row>
        </StyledContent>
    </StyledLayout>
  );
}

export default App;

// return (
//   <>
//     <Header />
//     <div style={{display: "flex", justifyContent: 'center', marginLeft: 20, marginRight: 20, marginTop: 30}}>
//       <Filters />
//       <Products />
//       <PriceList />
//     </div>
//   </>
// );
