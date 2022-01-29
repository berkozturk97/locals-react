import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckboxContainer, StyledCheckbox } from '../../../components/checkbox';
import { StyledInput } from '../../../components/input';
import { updateFilterOptions } from '../../../redux/actions/productAction';
import { FilterItemCount } from '../brands/brands-style';
import {
  FilterItemContainer,
  FilterItemHeader,
  FilterOptionsContainer,
  SpinnerContainer,
} from '../filters-style';

function TagOption() {
  const dispatch = useDispatch();

  const [filteredTags, setFilteredTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [checkAll, setCheckAll] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { tags, loading } = useSelector((state) => state.products);

  useEffect(() => {
    setFilteredTags(tags);
  }, [tags]);

  const changeFilterParams = (e, tagName) => {
    if (e.target.checked) {
      setSelectedTags([...selectedTags, tagName]);
      dispatch(
        updateFilterOptions({
          tags_like: [...selectedTags, tagName],
        }),
      );
    } else {
      const updatedTags = selectedTags.filter((brand) => brand !== tagName);
      setSelectedTags(updatedTags);
      dispatch(updateFilterOptions({ tags_like: updatedTags }));
    }

    setCheckAll(false);
  };

  const onCheckAllChange = (e) => {
    setSelectedTags(e.target.checked ? [] : selectedTags);
    if (e.target.checked) {
      dispatch(updateFilterOptions({ tags_like: undefined }));
    }
    setCheckAll(e.target.checked);
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
    const filteredOptions = tags.filter(
      (tag) => tag.tagName.toLowerCase().search(e.target.value.toLowerCase()) !== -1,
    );
    setFilteredTags(filteredOptions);
  };

  const renderCheckboxes = () => filteredTags.map((tag) => (
    <StyledCheckbox
      key={`ch_${tag.tagName}`}
      value={tag.tagName}
      onChange={(e) => changeFilterParams(e, tag.tagName)}
      checked
    >
      {tag.tagName}
      <FilterItemCount>  ({tag.tagCount})</FilterItemCount>
    </StyledCheckbox>
  ));

  return (
    <FilterItemContainer marginTop="24px" height="245px">
      <FilterItemHeader>Tags</FilterItemHeader>
      <FilterOptionsContainer height="230px" padding="24px">
        <StyledInput
          onChange={handleSearchInput}
          value={searchQuery}
          placeholder="Search Tag"
        />
        {loading ? (
          <SpinnerContainer>
            <Spin size="large" />
          </SpinnerContainer>
        ) : (
          <CheckboxContainer>
            <StyledCheckbox checked={checkAll} onChange={onCheckAllChange}>
              All
            </StyledCheckbox>
            <StyledCheckbox.Group value={selectedTags}>
              {!loading && renderCheckboxes()}
            </StyledCheckbox.Group>
          </CheckboxContainer>
        )}
      </FilterOptionsContainer>
    </FilterItemContainer>
  );
}

export default TagOption;
