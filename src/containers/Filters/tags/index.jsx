import React from "react";
import { useSelector } from "react-redux";
import {
  CheckboxContainer,
  StyledCheckbox,
} from "../../../components/checkbox";
import { StyledInput } from "../../../components/input";
import { FilterItemCount } from "../brands/brands-style";
import {
  FilterItemContainer,
  FilterItemHeader,
  FilterOptionsContainer,
} from "../filters-style";

const TagOption = () => {
  const { tags } = useSelector((state) => state.products);
  const renderCheckboxes = () => {
    return Object.keys(tags).map((tag) => (
      <StyledCheckbox>
        {tag} <FilterItemCount>({tags[tag]})</FilterItemCount>
      </StyledCheckbox>
    ));
  };
  return (
    <FilterItemContainer marginTop="24px" height="245px">
      <FilterItemHeader>Tags</FilterItemHeader>
      <FilterOptionsContainer height="230px" padding='24px'>
      <StyledInput placeholder="Search Tag" />
        <CheckboxContainer>
          <StyledCheckbox>All</StyledCheckbox>
          {renderCheckboxes()}
        </CheckboxContainer>
      </FilterOptionsContainer>
    </FilterItemContainer>
  );
};

export default TagOption;
