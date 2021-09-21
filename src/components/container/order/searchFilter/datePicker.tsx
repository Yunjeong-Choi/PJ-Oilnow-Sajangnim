import { FunctionComponent } from "react";
import styled from "styled-components";
import SquareButton from "../../../common/button/SquareButton";

const StyledDatePicker = styled.div`
  position: absolute;
  width: 351px;
  height: 37px;
  left: 0px;
  top: 34px;
`;

//TODO: datepicker를 하나만 만들고 물결이랑 같이 정렬을 하면 어떨까?
const StartDatePicker = styled(SquareButton)`
  position: absolute;
  width: 160px;
  height: 37px;
  left: 0px;
  top: 0px;
`;
//TODO: 날짜선택 글자정렬
//span 태그를 사용하고 span에 대한 style을 여기서 설정하면 영향을 미치는 범위는 여기에 한정되나?

const EndDatePicker = styled(SquareButton)`
  position: absolute;
  width: 160px;
  height: 37px;
  left: 191px;
  top: 0px;
`;

const DatePicker: FunctionComponent = () => {
  return (
    <>
      <StyledDatePicker>
        <StartDatePicker>
          <img src="img/calendar_icon.png" alt="calendarIcon" />
          <span>날짜선택</span>
        </StartDatePicker>
        ~
        <EndDatePicker>
          <span>날짜선택</span>
        </EndDatePicker>
      </StyledDatePicker>
    </>
  );
};

export default DatePicker;

//TODO: ~물결무늬는 어떻게 넣으면 좋을까요?
