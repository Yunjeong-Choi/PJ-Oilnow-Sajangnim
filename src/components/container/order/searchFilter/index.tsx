import { FunctionComponent } from "react";
import styled from "styled-components";
import SubTitle from "../../../common/title/SubTitle";
import DatePicker from "./DatePicker";
import PayStatusList from "./PayStatusList";
import SearchButton from "./SearchButton";

const SearchFilter: FunctionComponent = () => {
  return (
    <StyledSearchFilter>
      <SubTitle>검색 필터</SubTitle>
      <DatePicker />
      <PayStatusList />
      <SearchButton>검색</SearchButton>
    </StyledSearchFilter>
  );
};

export default SearchFilter;

const StyledSearchFilter = styled.div`
  background: white;
  height: 170px;
  padding: 12px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
