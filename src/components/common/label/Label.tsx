// import { FunctionComponent } from "react";
import styled from "styled-components";

// type LabelProps = {
//     className?: string,
// }

// const Label: FunctionComponent<LabelProps> = (props) => {
//   const { className, children } = props;
//   return <StyledLabel className={className}>{children}</StyledLabel>
// }

const Label = styled.div`
height: 25px;
width: 65px;
border-radius: 15px;
background: rgba(253, 215, 81, 0.88);

font-weight: 500;
font-size: 11px;
color: #343A40;

display: flex;
justify-content: center;
align-items: center;
`;

export default Label;

//TODO: export default는 기본으로 하고 안에 변형된 컴포넌트를 만들어서 내보내는 이유가 있을까요? 그룹핑, 확장성?