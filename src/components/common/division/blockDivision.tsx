import { FunctionComponent } from "react";
import styled from "styled-components";
//TODO: 반복설정은 어떻게 하는걸까
//TODO: 어데로 갔노

type BlockDivisionProps = {
    className?: string,
}

const StyledBlockDivision = styled.div`
width: 375px;
height: 12px;
left: 0px;
background: blue;
`
//#E9ECEF

const BlockDivision: FunctionComponent<BlockDivisionProps> = (props) => {
    const { className } = props;
    return <StyledBlockDivision className = {className}/>
}

export default BlockDivision;