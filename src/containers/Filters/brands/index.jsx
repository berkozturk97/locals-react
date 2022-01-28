import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { FilterItemCount } from "./brands-style";

const BrandOption = () => {
  const { companies } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const renderCheckbox = () => {
    return Object.keys(companies).map((company) => (
      <StyledCheckbox>
        {company} <FilterItemCount>({companies[company].length})</FilterItemCount>
      </StyledCheckbox>
    ));
  };
  return (
    <FilterItemContainer marginTop="24px" height="245px">
      <FilterItemHeader>Brands</FilterItemHeader>
      <FilterOptionsContainer height="230px" padding="24px">
        <StyledInput placeholder="Search Brand" />
        <CheckboxContainer>
          <StyledCheckbox>All</StyledCheckbox>
          {renderCheckbox()}
        </CheckboxContainer>
      </FilterOptionsContainer>
    </FilterItemContainer>
  );
};

export default BrandOption;
