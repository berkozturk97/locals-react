import React from "react";
import {
  CheckboxContainer,
  StyledCheckbox,
} from "../../../components/checkbox";
import { StyledInput } from "../../../components/input";
import {
  FilterItemContainer,
  FilterItemHeader,
  FilterOptionsContainer,
} from "../filters-style";

const TagOption = () => {
  return (
    <FilterItemContainer marginTop="24px" height="245px">
      <FilterItemHeader>Tags</FilterItemHeader>
      <FilterOptionsContainer height="230px" padding='24px'>
      <StyledInput placeholder="Search Tag" />
        <CheckboxContainer>
          <StyledCheckbox />
          <StyledCheckbox />
          <StyledCheckbox />
          <StyledCheckbox />
          <StyledCheckbox />
          <StyledCheckbox />
          <StyledCheckbox />
          <StyledCheckbox />
          <StyledCheckbox />
          <StyledCheckbox />
        </CheckboxContainer>
      </FilterOptionsContainer>
    </FilterItemContainer>
  );
};

export default TagOption;
