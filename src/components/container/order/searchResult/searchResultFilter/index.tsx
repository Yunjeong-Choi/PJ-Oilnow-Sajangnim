import { FunctionComponent } from "react";
import styled from "styled-components";
import SquareButton from "../../../../common/button/SquareButton";

const SearchResultFilter: FunctionComponent = () => {
  return (
    <OrderListHeader>
      <OrderListColTitle>주문상태</OrderListColTitle>
      <OrderListColTitle>날짜</OrderListColTitle>
      <OrderListColTitle>고객ID</OrderListColTitle>
      <OrderListColTitle>금액</OrderListColTitle>
      <OrderListSortedBy>정렬</OrderListSortedBy>
    </OrderListHeader>
  );
};

export default SearchResultFilter;

const OrderListHeader = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px 7px;

  border-bottom: 1px solid rgba(52, 58, 64, 0.7);
`;

const OrderListColTitle = styled.div`
  font-size: 11px;
  letter-spacing: -0.04em;
  color: #343a40;

  width: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderListSortedBy = styled(SquareButton)`
  width: 50px;
  height: 20px;

  font-size: 11px;
`;
