import ContentLoader from 'react-content-loader';
import { Container } from '../products-stlye';

function ProductLoading(props) {
  return Array.from(Array(16).keys()).map(() => (
    <Container xs={12} sm={12} md={12} lg={8} xl={6}>
      <ContentLoader
        speed={2}
        width={124}
        height={226}
        viewBox="0 0 126 226"
        backgroundColor="#8edbf2"
        foregroundColor="#fafafa"
        {...props}
      >
        <rect x="1" y="1" rx="12" ry="12" width="124" height="124" />
        <path d="M 17 17 h 92 v 92 H 17 z" />
        <rect x="1" y="204" rx="2" ry="2" width="124" height="22" />
        <rect x="1" y="133" rx="2" ry="2" width="54" height="13" />
        <rect x="1" y="163" rx="2" ry="2" width="108" height="13" />
        <rect x="1" y="183" rx="2" ry="2" width="39" height="13" />
      </ContentLoader>
    </Container>
  ));
}

export default ProductLoading;
