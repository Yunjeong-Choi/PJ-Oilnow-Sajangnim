import { FunctionComponent } from "react";
import styled from "styled-components";

type RoundSquareButtonProps = {
  className?: string;
};

const RoundSquareButton: FunctionComponent<RoundSquareButtonProps> = (
  props
) => {
  const { className, children } = props;
  return (
    <StyledRoundSquareButton className={className}>
      {children}
    </StyledRoundSquareButton>
  );
};

export default RoundSquareButton;
// 디폴트 export가 꼭 있어야만 하나? > 아니다.

// 왕 className을 넣고 해당 요소에 타입을 지정하니까 스타일 extend가 됐음
//근데 클래스명은 따로 지정을 안해줘도 될까요? 아니오. 어글리파이된 클래스명이 자동으로 생성되는 것이 바로 장점.
const StyledRoundSquareButton = styled.button`
width: 48px;
height: 36px;
background: #ffffff;
border-radius: 18px;
border: none;

cursor: pointer;

font-weight: bold;
font-size: 14px;
text-align: center;
letter-spacing: -0.04em;
color: #35393f;

display: flex;
justify-content: center;
align-items: center;
`;

export const GrayButton = styled(RoundSquareButton)`
background: #e9ecef;
`;
export const BlueButton = styled(RoundSquareButton)`
background: #5783fc;
color: white;
`;