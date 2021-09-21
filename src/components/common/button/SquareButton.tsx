import { FunctionComponent } from "react";
import styled from "styled-components";

type SquareButtonProps = {
    className?: string,
}

const SquareButton: FunctionComponent<SquareButtonProps> = (props) => {
  const { className, children } = props;
  return <StyledSquareButton className={className}>{children}</StyledSquareButton>
}

const StyledSquareButton = styled.button`
    height: 37px;
    left: 0px;
    top: 0px;
    border-radius: 3px;

    position: absolute;

    background: #FFFFFF;
    border: 0.7px solid #8A8A8A;
    box-sizing: border-box;
    border-radius: 3px;

    cursor: pointer;

    color: #343A40;

`;

export default SquareButton;

