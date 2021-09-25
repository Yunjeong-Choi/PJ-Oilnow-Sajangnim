import { FunctionComponent } from "react";
import styled from "styled-components";

type HeaderTitleProps = {
  className?: string;
};

const HeaderTitle: FunctionComponent<HeaderTitleProps> = (props) => {
  const { className, children } = props;
  return (
    <StyledHeaderTitle className={className}>{children}</StyledHeaderTitle>
  );
};

export default HeaderTitle;

const StyledHeaderTitle = styled.div`
  font-weight: bold;
  font-size: 28px;
  text-align: left;
  color: #343a40;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//TODO: 텍스트 정렬이 원하는대로 되지 않는다.
