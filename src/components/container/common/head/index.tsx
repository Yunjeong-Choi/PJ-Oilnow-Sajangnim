import { FunctionComponent } from "react";
import styled from "styled-components";
import {
  GrayButton,
  BlueButton,
} from "../../../common/button/RoundSquareButton";
import HeaderTitle from "../../../common/title/headerTitle";

const ContainerHeader: FunctionComponent = (props) => {
  const { children } = props;
  return (
    <HeaderPanel>
      <MenuButton>메뉴</MenuButton>
      <HeaderTitle>{children}</HeaderTitle>
      <NotiButton>
        <img src="img/noti_icon.png" alt="알림"></img>
      </NotiButton>
      <QRButton>QR인식</QRButton>
    </HeaderPanel>
  );
};

//TODO:얘는 어떻게 아래에 있어도 적용이 되는 거지?
//원래 위에 있어야 하는 게 맞는데, 이건 js의 영역
const HeaderPanel = styled.div`
  position: absolute;
  width: 351px;
  height: 41px;
  left: 12px;
  top: 18px;
  background: white;
`;

const MenuButton = styled(GrayButton)`
  left: 0%;
  right: 86.32%;
  top: 9.76%;
  bottom: 2.44%;
`;
const NotiButton = styled(GrayButton)`
  left: 62.11%;
  right: 24.22%;
  top: 9.76%;
  bottom: 2.44%;
`;

// 어라 왜 width가 안먹지? -> 세미콜론이 안붙으면 인식을 못하는구나
const QRButton = styled(BlueButton)`
  color: white;
  width: 77px;

  left: 78.06%;
  right: 0%;
  top: 9.76%;
  bottom: 2.44%;
`;

export default ContainerHeader;
