import { FunctionComponent } from "react";
import styled from "styled-components";
import SquareButton from "../../../common/button/SquareButton";

const StyledSearchButton = styled(SquareButton)`
  position: absolute;
  width: 65px;
  height: 37px;
  left: 286px;
  top: 121px;
  background: #343a40;
  color: white;
  font-weight: bold;
  border: none;
`;

const SearchButton: FunctionComponent = () => {
  return <StyledSearchButton>검색</StyledSearchButton>;
};

export default SearchButton;
