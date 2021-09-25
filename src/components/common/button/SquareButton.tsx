import { FunctionComponent } from "react";
import styled from "styled-components";

type SquareButtonProps = {
  className?: string;
};

const SquareButton: FunctionComponent<SquareButtonProps> = (props) => {
  const { className, children } = props;
  return (
    <StyledSquareButton className={className}>{children}</StyledSquareButton>
  );
};

export default SquareButton;

const StyledSquareButton = styled.button`
  height: 37px;
  border-radius: 3px;

  background: #ffffff;
  border: 0.7px solid #8a8a8a;
  box-sizing: border-box;
  border-radius: 4px;

  cursor: pointer;

  color: #343a40;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DarkGrayButton = styled(SquareButton)`
  background: #343a40;
  color: #ffffff;
  border: none;
`;

export const RedButton = styled(SquareButton)`
  background: #f42c10;
  color: #ffffff;
  border: none;
`;
