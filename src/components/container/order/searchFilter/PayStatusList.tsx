import { FunctionComponent } from "react";
import styled from "styled-components";
import RoundSquareButton from "../../../common/button/SquareButton";

interface PayStatusProps {
  left: number;
  label?: string;
}

const PayStatus: FunctionComponent<PayStatusProps> = ({ left, label }) => {
  return <StyledPayStatus left={left}>{label}</StyledPayStatus>;
};

const PayStatusDataList = [
  { left: 0, label: "결제대기" },
  { left: 25, label: "결제완료" },
  { left: 50, label: "취소요청" },
  { left: 75, label: "취소완료" },
];

const PayStatusList: FunctionComponent = () => {
  return (
    <StyledGroup>
      {PayStatusDataList.map((item) => (
        <PayStatus key={item.left} {...item} />
      ))}
    </StyledGroup>
  );
};

export default PayStatusList;

const StyledGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledPayStatus = styled(RoundSquareButton)<PayStatusProps>`
  width: 80.23px;
  height: 30px;
  border-radius: 20px;
  left: ${(props) => props.left + 1}%;
`;
