import { FunctionComponent } from "react";
import styled from "styled-components";
import HeaderTitle from "../../common/title/HeaderTitle";


const ModalHeader: FunctionComponent = (props) => {
  const { children } = props;

  const onButtonClick = () => {
    console.log('Fire open modal!');
  }

  return (
    <StyledModalHeader>
      <button onClick={onButtonClick} style={{backgroundColor:"#ffffff", border: "none", margin: "0 20px 0 10px"}}>
        <img
          src="img/back_arrow_icon.png"
          alt="arrow img"
        />
      </button>
      <HeaderTitle>{children}</HeaderTitle>
    </StyledModalHeader>
  );
};

export default ModalHeader;

const StyledModalHeader = styled.div`
  height: 78px;
  background: white;

  display: flex;
  align-items: center;
`;
