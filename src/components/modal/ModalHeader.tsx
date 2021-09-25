import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { close } from "../../features/modalSlice";
import HeaderTitle from "../common/title/HeaderTitle";

const ModalHeader: FunctionComponent = (props) => {
  const { children } = props;
  const dispatch = useDispatch();

  const onButtonClick = () => {
    window.scrollTo({ top: 0 });
    dispatch(close());
  };

  return (
    <StyledModalHeader>
      <button
        onClick={onButtonClick}
        style={{
          backgroundColor: "#ffffff",
          border: "none",
          margin: "0 20px 0 10px",
        }}
      >
        <img src="img/back_arrow_icon.png" alt="arrow img" />
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
