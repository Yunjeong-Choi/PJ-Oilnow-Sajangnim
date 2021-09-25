import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../store";
import SubTitle from "../../common/title/SubTitle";

const CancelList: FunctionComponent = () => {
  const data = useSelector((state: RootState) => state.modal.cancelModalData);

  if (!data) {
    return (
      <StyledCancelList>
        <h1>데이터가 없습니다!</h1>
      </StyledCancelList>
    );
  }

  return (
    <StyledCancelList>
      <SubTitle>취소 예정 항목</SubTitle>
      <hr style={{ width: "318px" }} />
      <div>Index: {data.index}</div>
      <div>취소 항목 투</div>
      <div>취소 항목 쓰리</div>
      <hr />
      <CancelTotal>
        <div>취소 예정 금액: </div>
        <div className="total-price" style={{ color: "red" }}>
          총 {data.money}원
        </div>
      </CancelTotal>
    </StyledCancelList>
  );
};

//TODO: 구분선의 넓이...

export default CancelList;

const StyledCancelList = styled.div`
  background: #ffffff;
  width: 100%;
  height: 162px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
`;

const CancelTotal = styled.div`
  display: flex;
`;
