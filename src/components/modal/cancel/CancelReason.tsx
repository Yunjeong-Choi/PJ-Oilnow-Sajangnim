import { FunctionComponent } from "react";
import styled from "styled-components";
import SubTitle from "../../common/title/SubTitle";
import SquareButton from "../../common/button/SquareButton";

const CancelReason: FunctionComponent = () => {
    return (
        <StyledCancelReason>
            <SubTitle>취소 사유</SubTitle>
            <CancelReasonBox>취소사유를 선택해주세요.</CancelReasonBox>
        </StyledCancelReason>
    )
}

export default CancelReason;

const StyledCancelReason = styled.div`
display: flex;
align-items: center;

width: 100%;
height: 30px;
background: #ffffff;
`

const CancelReasonBox = styled(SquareButton)`
display: flex;
align-items: center;
width: 250px;
margin-left: 10px;
`
//TODO: 왜 글씨가 살짝 올라간것 같죠?
