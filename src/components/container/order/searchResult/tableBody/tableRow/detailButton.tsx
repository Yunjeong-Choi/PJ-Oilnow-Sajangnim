import { FunctionComponent } from "react";
import styled from "styled-components";

const DetailButton: FunctionComponent = (props) => {
    const { children } = props;
    const StyledDetailButton = styled.button`
        position: absolute;
        height: 19px;
        width: 36px;
        left: 85.51%;
        right: 4.26%;
        top: 8.33%;
        bottom: 38.89%;

        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 19px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.04em;

        color: #343A40;
        `
    return (
        <StyledDetailButton>{children}</StyledDetailButton>
    )

}

export default DetailButton;