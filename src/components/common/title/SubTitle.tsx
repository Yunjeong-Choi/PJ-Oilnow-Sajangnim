import { FunctionComponent } from "react";
import styled from "styled-components";

type SubTitleProps = {
  className?: string;
};

const SubTitle: FunctionComponent<SubTitleProps> = (props) => {
  const { className, children } = props;
  return <StyledSubTitle className={className}>{children}</StyledSubTitle>;
};

export default SubTitle;

const StyledSubTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  text-align: left;
  letter-spacing: -0.04em;
  color: #343a40;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//TODO: 얘는 어떻게 왼쪽으로..?