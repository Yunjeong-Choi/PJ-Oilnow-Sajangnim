import { FunctionComponent } from "react";
import styled from "styled-components";

const ModalBackground: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <StyledModalBackground>
      <StyledAnimationBackground>{children}</StyledAnimationBackground>
    </StyledModalBackground>
  );
};

const StyledModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: #ffffff;
`;

const StyledAnimationBackground = styled.div`
  animation: fadein 0.25s;

  @keyframes fadein {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`;

export default ModalBackground;
