import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { StyledInput } from '../../../components/input';
import { updateFilterOptions } from '../../../redux/actions/productAction';
import { FilterItemCount } from './brands-style';
import { Global } from '../../../constants/global';
import {
  CheckboxContainer,
  StyledCheckbox,
} from '../../../components/checkbox';
import {
  FilterItemContainer,
  FilterItemHeader,
  FilterOptionsContainer,
  SpinnerContainer,
} from '../filters-style';

function BrandOption() {
  const dispatch = useDispatch();

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [checkAll, setCheckAll] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  const { companies, loading } = useSelector((state) => state.products);

  useEffect(() => {
    setFilteredCompanies(companies);
  }, [companies]);

  const changeFilterParams = (e, companyName) => {
    if (e.target.checked) {
      setSelectedBrands([...selectedBrands, companyName]);
      dispatch(updateFilterOptions({ manufacturer_like: [...selectedBrands, companyName] }));
    } else {
      const updatedBrands = selectedBrands.filter((brand) => brand !== companyName);
      setSelectedBrands(updatedBrands);
      dispatch(updateFilterOptions({ manufacturer_like: updatedBrands }));
    }

    setCheckAll(false);
  };

  const onCheckAllChange = (e) => {
    const { checked } = e.target;

    setSelectedBrands(checked ? [] : selectedBrands);
    if (checked) {
      dispatch(updateFilterOptions({ manufacturer_like: undefined }));
    }
    setCheckAll(checked);
  };

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    const filteredOptions = companies.filter((company) => company.companyName.toLowerCase().search(value.toLowerCase()) !== -1);
    setFilteredCompanies(filteredOptions);
  };

  const renderCheckbox = () => filteredCompanies.map((company) => (
    <StyledCheckbox
      key={`ch_${company.companyName}`}
      value={company.companyName}
      onChange={(e) => changeFilterParams(e, company.companyName)}
      checked
    >
      {company.companyName}
      <FilterItemCount>  ({company.productCount}) </FilterItemCount>
    </StyledCheckbox>
  ));

  return (
    <FilterItemContainer marginTop="24px" height="245px">
      <FilterItemHeader>{Global.BRANDS}</FilterItemHeader>
      <FilterOptionsContainer height="230px" padding="24px">
        <StyledInput
          onChange={handleSearchInput}
          value={searchQuery}
          placeholder={Global.SEARCH_BRAND}
        />
        {loading ? (
          <SpinnerContainer>
            <Spin size="large" />
          </SpinnerContainer>
        ) : (
          <CheckboxContainer>
            <StyledCheckbox checked={checkAll} onChange={onCheckAllChange}>
              {Global.ALL}
            </StyledCheckbox>
            <StyledCheckbox.Group value={selectedBrands}>
              {renderCheckbox()}
            </StyledCheckbox.Group>
          </CheckboxContainer>
        )}
      </FilterOptionsContainer>
    </FilterItemContainer>
  );
}

export default BrandOption;
