import { Radio } from "antd";
import React from "react";
import { CheckRadio, CircledCheckbox } from "../../../components/checkbox";
import { StyledRadio } from "../../../components/radio";
import { FilterItemContainer, FilterItemHeader, FilterOptionsContainer } from "../filters-style";

const SortingOption = () => {
  return (
    <FilterItemContainer>
      <FilterItemHeader>Sorting</FilterItemHeader>
      <FilterOptionsContainer padding='24px'>
          <Radio.Group>
            <StyledRadio>Test</StyledRadio>
            <StyledRadio>Test</StyledRadio>
            <StyledRadio>Test</StyledRadio>
            <StyledRadio>Test</StyledRadio>
          </Radio.Group>
      </FilterOptionsContainer>
    </FilterItemContainer>
  );
};

export default SortingOption;
