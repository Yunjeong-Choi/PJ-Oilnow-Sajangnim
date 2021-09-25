import { FunctionComponent } from "react";
import styled from "styled-components";

interface DetailButtonProps {
  onDetailHandler: () => void;
}

const DetailButton: FunctionComponent<DetailButtonProps> = (props) => {
  const { children, onDetailHandler } = props;

  return (
    <StyledDetailButton onClick={onDetailHandler}>
      {children}
    </StyledDetailButton>
  );
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
