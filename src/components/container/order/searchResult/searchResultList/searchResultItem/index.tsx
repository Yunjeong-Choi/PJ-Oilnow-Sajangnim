import { FunctionComponent } from "react";
import styled from "styled-components";
import Label from "../../../../../common/label/Label";
import DetailButton from "./DetailButton";


const SearchResultItem: FunctionComponent = () => {
  return (
    <StyledResultItem>
      <Label>결제대기</Label>
      <ResultItemBox>21.09.10</ResultItemBox>
      <ResultItemBox>younghee</ResultItemBox>
      <ResultItemBox>10,000</ResultItemBox>
      <DetailButton>열기</DetailButton>
    </StyledResultItem>
  );
};

export default SearchResultItem;

const StyledResultItem = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 7px;
border-bottom: 1px solid #C4C4C4;
`

// &:after {
//   content: "";
//   display: block;
//   width: 90%;
//   border-bottom: 1px solid #bcbcbc;
//   margin: 10px 14px;
// }
// const StyledLabel = styled(Label)`
  
// `;

const ResultItemBox = styled.div`
  font-size: 13px;
  color: #343a40;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
`;
