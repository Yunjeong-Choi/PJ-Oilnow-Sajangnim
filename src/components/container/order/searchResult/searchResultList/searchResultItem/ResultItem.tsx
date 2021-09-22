import { FunctionComponent } from "react";
import styled from "styled-components";
import Label from "../../../../../common/label/Label";
import DetailButton from "./DetailButton";

// const StyledLabel = styled(Label)`
  
// `;

const TextBox = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;

  text-align: center;
  letter-spacing: -0.04em;

  color: #343a40;
`;

const TableValue: FunctionComponent = () => {
  return (
    <StyledTableValue>
      <Label>결제대기</Label>
      <TextBox>21.09.10</TextBox>
      <TextBox>younghee</TextBox>
      <TextBox>10,000</TextBox>
      <DetailButton>열기</DetailButton>
    </StyledTableValue>
  );
};

const StyledTableValue = styled.div`
  width: 352px;
  height: 36px;
  left: 0px;
  top: 34px;

  &:after {
    content: "";
    display: block;
    width: 90%;
    border-bottom: 1px solid #bcbcbc;
    margin: 10px 14px;
  }
`;

export default TableValue;
