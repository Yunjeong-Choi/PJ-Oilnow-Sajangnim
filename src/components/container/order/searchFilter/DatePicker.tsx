import { FunctionComponent } from "react";
import styled from "styled-components";
import SquareButton from "../../../common/button/SquareButton";

const DatePicker: FunctionComponent = () => {
  return (
    <>
      <StyledDatePicker>
        <DateBox>
          <img src="img/calendar_icon.png" alt="calendarIcon" />
          날짜선택
        </DateBox>
        <DateTilde>~</DateTilde>
        <DateBox>
          <img src="img/calendar_icon.png" alt="calendarIcon" />
          날짜선택
        </DateBox>
      </StyledDatePicker>
    </>
  );
};

export default DatePicker;

const StyledDatePicker = styled.div`
  display: flex;
  justify-content: space-between;
`;

//TODO: datepicker를 하나만 만들고 물결이랑 같이 정렬을 하면 어떨까?
const DateBox = styled(SquareButton)`
  width: 160px;
  height: 37px;
`;

//모든 요소는 태그를 가진다!
const DateTilde = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
