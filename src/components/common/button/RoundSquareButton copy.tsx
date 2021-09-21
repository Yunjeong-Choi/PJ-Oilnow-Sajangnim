import { FunctionComponent } from "react";
import styled from "styled-components";

export const MenuButton: FunctionComponent = (props) => {
  const { children } = props;
  return <StyledMenuButton>{children}</StyledMenuButton>
}

const StyledMenuButton = styled.button`
  width: 48px;
  height: 36px;

  position: absolute;
  left: 3.2%;
  right: 84%;
  top: 3.3%;
  bottom: 91.3%;

  background: #e9ecef;
  border-radius: 18px;
`;

const RoundSquareButton = () => {
  return <button>RoundSquareButton</button>;
};

export default RoundSquareButton;

//아래 roundsquarebutton은 없어도 되는건가요?