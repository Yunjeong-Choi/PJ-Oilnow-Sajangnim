import { FunctionComponent } from "react";
import styled from "styled-components";
import TableHead from "./searchResultFilter/index";
import TableBody from "./searchResultList/index";

const SearchResult: FunctionComponent = () => {
  return (
    <StyledSearchResult>
      <TableHead />
      <TableBody />
    </StyledSearchResult>
  );
};

const StyledSearchResult = styled.div`
  position: absolute;
  width: 351px;
  height: 391px;
  left: 0px;
  top: 163px;
  background: white;
`;

export default SearchResult;
