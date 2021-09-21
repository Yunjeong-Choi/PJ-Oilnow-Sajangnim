import { FunctionComponent } from "react";
import styled from "styled-components";
import SquareButton from "../../../../common/button/SquareButton";

const GroupOfColTitle = styled.div`
  width: 352px;
  height: 25px;
  left: 0px;
  top: 0px;
`;

const ColTitle: FunctionComponent = (props) => {
  const { children } = props;
  //TODO: position이었나, inlineblock으로 설정하면 될것 같은데
  return <span>{children}</span>;
};

const OrderBy: FunctionComponent = () => {
  const StyledOrderBy = styled(SquareButton)`
    position: absolute;
    width: 50px;
    height: 20px;
    left: 293px;
    top: 0px;
  `;
  return <StyledOrderBy>정렬</StyledOrderBy>;
};

const TableHead: FunctionComponent = () => {
  return (
      <GroupOfColTitle>
        <ColTitle>주문상태</ColTitle>
        <ColTitle>날짜</ColTitle>
        <ColTitle>고객ID</ColTitle>
        <ColTitle>금액</ColTitle>
        <OrderBy />
      </GroupOfColTitle>
  );
};

export default TableHead;
