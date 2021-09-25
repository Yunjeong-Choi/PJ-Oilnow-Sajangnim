import styled from "styled-components";
import {DarkGrayButton, RedButton} from "../../common/button/SquareButton";

const CancelButtons = () => {
  return (
    <StyledCancelButtons>
      <BackButton>돌아가기</BackButton>
      <CancelConfirmButton>결제취소</CancelConfirmButton>
    </StyledCancelButtons>
  );
};

export default CancelButtons;

const StyledCancelButtons = styled.div`
display: flex;
justify-content: space-evenly;
background: #ffffff;
bottom: 40%;
`
//TODO: 버튼의 bottom을 내려서 전체 간격을 자동 조정되도록 하고 싶은데..
//TODO: 기본으로 모든게 flex이도록 설정해도 되나?

const BackButton = styled(DarkGrayButton)`
  width: 150px;
  height: 36px;
`;

const CancelConfirmButton = styled(RedButton)`
  width: 150px;
  height: 36px;
`;
