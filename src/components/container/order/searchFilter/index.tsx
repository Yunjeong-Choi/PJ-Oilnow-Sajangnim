import { FunctionComponent } from "react";
import styled from "styled-components";
import SubTitle from "../../../common/title/subTitle";
import DatePicker from "./datePicker";
import GroupOfPayStatus from "./groupOfPayStatus";
import SearchButton from "./searchButton";

const StyledSearchFilter = styled.div`
  position: absolute;
  width: 351px;
  height: 158px;
  left: 0px;
  top: 0px;
  background: white;
`;
//TODO: 다 컴포넌트 명에 styled라고 붙여주는 것이 convention?

const SearchFilterTitle = styled(SubTitle)`
  left: 0%;
  right: 80.63%;
  top: 0%;
  bottom: 83.54%;
`;

const SearchFilter: FunctionComponent = () => {
  return (
    <StyledSearchFilter>
      <SearchFilterTitle className="searchFilterTitle">
        검색 필터
      </SearchFilterTitle>
      <DatePicker />
      <GroupOfPayStatus />
      <SearchButton>검색</SearchButton>
    </StyledSearchFilter>
  );
};

export default SearchFilter;
