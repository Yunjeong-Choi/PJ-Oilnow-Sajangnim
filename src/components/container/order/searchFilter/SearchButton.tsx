import { FunctionComponent } from "react";
import styled from "styled-components";
import SquareButton from "../../../common/button/SquareButton";

const SearchButton: FunctionComponent = () => {
  return <StyledSearchButton>검색</StyledSearchButton>;
};

export default SearchButton;

const StyledSearchButton = styled(SquareButton)`
  width: 65px;
  height: 37px;
  background: #343a40;
  border: none;

  color: white;
  font-weight: bold;

`;

// TODO: 어떻게 오른쪽으로 옮길까