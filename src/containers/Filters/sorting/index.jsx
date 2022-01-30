import React from 'react';
import { Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { StyledRadio } from '../../../components/radio';
import { Global } from '../../../constants/global';
import { SortingOptions as options } from '../../../constants/sort-options';
import { updateFilterOptions } from '../../../redux/actions/productAction';
import {
  FilterItemContainer,
  FilterItemHeader,
  FilterOptionsContainer,
} from '../filters-style';

function SortingOption() {
  const dispatch = useDispatch();

  const handleRadioValues = (item) => {
    dispatch(updateFilterOptions({ ...item.sortOptions }));
  };

  const renderRadioButton = () => options.map((item) => (
    <StyledRadio key={`sr_${item.value}`} onChange={() => handleRadioValues(item)} value={item.value}>
      {item.key}
    </StyledRadio>
  ));

  return (
    <FilterItemContainer>
      <FilterItemHeader>{Global.SORTING}</FilterItemHeader>
      <FilterOptionsContainer padding="24px">
        <Radio.Group defaultValue={options[0].value}>
          {renderRadioButton()}
        </Radio.Group>
      </FilterOptionsContainer>
    </FilterItemContainer>
  );
}

export default SortingOption;
