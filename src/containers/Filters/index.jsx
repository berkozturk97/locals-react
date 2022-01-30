import React from 'react';
import BrandOption from './brands';
import SortingOption from './sorting';
import TagOption from './tags';
import { Container } from './filters-style';

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
