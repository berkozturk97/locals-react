import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
`;

export const FilterItemContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : '200px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
`;

export const FilterItemHeader = styled.span`
  font-size: 13px;
  color: #697488;
`;

export const FilterOptionsContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : '180px')};
  background-color: #ffffff;
  border-radius: 2px;
  margin-top: 5px;
  padding: ${(props) => (props.padding ? props.padding : 0)};
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
