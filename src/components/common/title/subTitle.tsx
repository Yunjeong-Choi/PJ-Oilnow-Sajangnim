import { FunctionComponent } from "react";
import styled from "styled-components";

type SubTitleProps = {
    className?: string,
}

const SubTitle: FunctionComponent<SubTitleProps> = (props) => {
    const { className, children } = props;
    return <StyledSubTitle className={className}>{children}</StyledSubTitle>
}

export default SubTitle;

const StyledSubTitle = styled.div`
position: absolute;
height: 26px;
width: 68px;

font-family: Noto Sans KR;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;

align-items: center;
text-align: center;
letter-spacing: -0.04em;

color: #343A40;
`

//display: flex;
