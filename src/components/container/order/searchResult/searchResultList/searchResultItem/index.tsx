import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CancelModalData, open } from "../../../../../../features/modalSlice";
import Label from "../../../../../common/label/Label";
import DetailButton from "./DetailButton";

interface SearchResultItemProps {
  index: number;
}

// TODO: 숙제임
const data = { date: "21.09.10", name: "younghee", money: 10000 };

const SearchResultItem: FunctionComponent<SearchResultItemProps> = (props) => {
  const { index } = props;
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const dispatch = useDispatch();

  const modalHandler = () => {
    const modalData: CancelModalData = {
      index,
      ...data,
    };
    dispatch(open(modalData));
    setIsOpenDetail(!isOpenDetail);
  };
  const detailHandler = () => setIsOpenDetail(!isOpenDetail);

  return (
    <StyledResultItem>
      <Label>결제대기</Label>
      <ResultItemBox>{index}</ResultItemBox>
      <ResultItemBox>{data.date}</ResultItemBox>
      <ResultItemBox>{data.name}</ResultItemBox>
      <ResultItemBox>{data.money}</ResultItemBox>
      <DetailButton onDetailHandler={detailHandler}>
        {isOpenDetail ? "닫기" : "열기"}
      </DetailButton>
      {isOpenDetail && (
        <StyledDetailList>
          <li>Hello</li>
          <li>
            <button onClick={modalHandler}>취소하기</button>
          </li>
        </StyledDetailList>
      )}
    </StyledResultItem>
  );
};

export default SearchResultItem;

const StyledDetailList = styled.ul`
  width: 100%;
`;

const StyledResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 7px;
  border-bottom: 1px solid #c4c4c4;
`;

// &:after {
//   content: "";
//   display: block;
//   width: 90%;
//   border-bottom: 1px solid #bcbcbc;
//   margin: 10px 14px;
// }
// const StyledLabel = styled(Label)`

// `;

const ResultItemBox = styled.div`
  font-size: 13px;
  color: #343a40;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
`;
