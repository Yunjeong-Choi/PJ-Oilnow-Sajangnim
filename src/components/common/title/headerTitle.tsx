import { FunctionComponent } from "react";
import styled from "styled-components";

type HeaderTitleProps = {
    className?: string,
}

const HeaderTitle: FunctionComponent<HeaderTitleProps> = (props) => {
    const { className, children } = props;
    return <StyledHeaderTitle className={className}>{children}</StyledHeaderTitle>
}

export default HeaderTitle;

const StyledHeaderTitle = styled.div`
position: absolute;
height: 41px;
width: 104px;
left: 58px;
top: 0%;
bottom: 0%;

font-family: Noto Sans KR;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 41px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;

color: #343A40;
`

//TODO: 텍스트 정렬이 원하는대로 되지 않는다.