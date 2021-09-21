import { FunctionComponent } from "react";
import styled from "styled-components";
//TODO: 반복설정은 어떻게 하는걸까

const StyledLineDivision = styled.hr`
  width: 100%;
  border: 0.7px solid #c4c4c4;
  position: absolute;
  top: 190px;
`;

const LineDivision: FunctionComponent = () => {
  return <StyledLineDivision />;
};

export default LineDivision;
