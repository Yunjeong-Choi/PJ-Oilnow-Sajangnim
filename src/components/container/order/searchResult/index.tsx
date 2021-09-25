import { FunctionComponent } from "react";
import styled from "styled-components";
import SearchResultFilter from "./searchResultFilter/index";
import SearchResultList from "./searchResultList/index";

const SearchResult: FunctionComponent = () => {
  return (
    <StyledSearchResult>
      <SearchResultFilter />
      <SearchResultList />
    </StyledSearchResult>
  );
};

const StyledSearchResult = styled.div`
  height: 391px;
  background: white;
  margin-top: 5px;
`;

export default SearchResult;
