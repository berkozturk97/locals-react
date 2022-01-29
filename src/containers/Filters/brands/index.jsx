import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CheckboxContainer,
  StyledCheckbox,
} from '../../../components/checkbox';
import { StyledInput } from '../../../components/input';
import { updateFilterOptions } from '../../../redux/actions/productAction';
import {
  FilterItemContainer,
  FilterItemHeader,
  FilterOptionsContainer,
} from '../filters-style';
import { FilterItemCount } from './brands-style';

function BrandOption() {
  const dispatch = useDispatch();

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [checkAll, setCheckAll] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { companies, loading } = useSelector((state) => state.products);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    setFilteredCompanies(companies);
  }, [companies]);

  const changeFilterParams = (e, companyName) => {
    if (e.target.checked) {
      setSelectedBrands([...selectedBrands, companyName]);
      dispatch(
        updateFilterOptions({
          manufacturer_like: [...selectedBrands, companyName],
        }),
      );
    } else {
      const updatedBrands = selectedBrands.filter(
        (brand) => brand !== companyName,
      );
      setSelectedBrands(updatedBrands);
      dispatch(updateFilterOptions({ manufacturer_like: updatedBrands }));
    }

    setCheckAll(false);
  };

  const renderCheckbox = () => filteredCompanies.map((company) => (
    <StyledCheckbox
      key={`ch_${company.companyName}`}
      value={company.companyName}
      onChange={(e) => changeFilterParams(e, company.companyName)}
      checked
    >
      {company.companyName}
      <FilterItemCount>
        (
        {company.productCount}
        )
      </FilterItemCount>
    </StyledCheckbox>
  ));

  const onCheckAllChange = (e) => {
    setSelectedBrands(e.target.checked ? [] : selectedBrands);
    if (e.target.checked) {
      dispatch(updateFilterOptions({ manufacturer_like: undefined }));
    }
    setCheckAll(e.target.checked);
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
    const filteredOptions = companies.filter(
      (company) => company.companyName
        .toLowerCase()
        .search(e.target.value.toLowerCase()) !== -1,
    );
    setFilteredCompanies(filteredOptions);
  };

  return (
    <FilterItemContainer marginTop="24px" height="245px">
      <FilterItemHeader>Brands</FilterItemHeader>
      <FilterOptionsContainer height="230px" padding="24px">
        <StyledInput
          onChange={handleSearchInput}
          value={searchQuery}
          placeholder="Search Brand"
        />
        {!loading && (
          <CheckboxContainer>
            <StyledCheckbox checked={checkAll} onChange={onCheckAllChange}>
              All
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
