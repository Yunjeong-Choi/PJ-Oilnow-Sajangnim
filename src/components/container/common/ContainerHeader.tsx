import { FunctionComponent } from "react";
import styled from "styled-components";
import { GrayButton, BlueButton } from "../../common/button/RoundSquareButton";
import HeaderTitle from "../../common/title/HeaderTitle";

const ContainerHeader: FunctionComponent = (props) => {
  const { children } = props;
  return (
    <StyledContainerHeader>
      <StyledHeaderSide>
        <HeaderGrayButton>메뉴</HeaderGrayButton>
        <HeaderTitle>{children}</HeaderTitle>
      </StyledHeaderSide>
      <StyledHeaderSide>
        <HeaderGrayButton>
          <img src="img/noti_icon.png" alt="알림"></img>
        </HeaderGrayButton>
        <QRButton>QR인식</QRButton>
      </StyledHeaderSide>
    </StyledContainerHeader>
  );
};

//TODO:얘는 어떻게 아래에 있어도 적용이 되는 거지?
//원래 위에 있어야 하는 게 맞는데, 이건 js의 영역
const StyledContainerHeader = styled.div`
  height: 78px;
  background: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeaderSide = styled.div`
  display: flex;
`;

const HeaderGrayButton = styled(GrayButton)`
  margin-right: 8px;
`;

// 어라 왜 width가 안먹지? -> 세미콜론이 안붙으면 인식을 못하는구나
const QRButton = styled(BlueButton)`
  width: 77px;
`;

export default ContainerHeader;
