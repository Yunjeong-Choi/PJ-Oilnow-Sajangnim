import { FunctionComponent } from "react";
import styled from "styled-components";

const DetailButton: FunctionComponent = (props) => {
  const { children } = props;
  
  return <StyledDetailButton>{children}</StyledDetailButton>;
};

export default DetailButton;

const StyledDetailButton = styled.button`
  font-size: 13px;
  color: #343a40;

  background: #ffffff;
  border: none;
  width: 65px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//TODO: 열기를 누르면 아래 항목이 밀려나고 상세항목이 나오도록 어떻게 할까요?
