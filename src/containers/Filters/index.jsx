import React from 'react';
import BrandOption from './brands';
import { Container } from './filters-style';
import SortingOption from './sorting';
import TagOption from './tags';

function Filters() {
  return (
    <Container>
      <SortingOption />
      <BrandOption />
      <TagOption />
    </Container>
  );
}

export default Filters;
