import { Radio } from "antd";
import React from "react";
import { CheckRadio, CircledCheckbox } from "../../../components/checkbox";
import { StyledRadio } from "../../../components/radio";
import { SortingOptions as options} from "../../../constants/sort-options";
import { FilterItemContainer, FilterItemHeader, FilterOptionsContainer } from "../filters-style";

const SortingOption = () => {
  const renderRadioButton = () => {
    return options.map((item) => <StyledRadio value={item.value}>{item.key}</StyledRadio>)
  }
  return (
    <FilterItemContainer>
      <FilterItemHeader>Sorting</FilterItemHeader>
      <FilterOptionsContainer padding='24px'>
          <Radio.Group defaultValue={options[0].value}>
           {renderRadioButton()}
          </Radio.Group>
      </FilterOptionsContainer>
    </FilterItemContainer>
  );
};

export default SortingOption;
