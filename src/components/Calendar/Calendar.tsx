import React from "react";
import styled from "styled-components";
import CalendarHeader from "./CalendarHeader";
import CalendarMonth from "./CalendarMonth";
import WeekendColumns from "./WeekendColumns";
import { useHolidaysFetchAndDispatch } from "../../hooks/holidays";
import { CALENDAR_WIDTH } from "./calendar-params";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: max-content repeat(${CALENDAR_WIDTH}, 1fr);
  font-size: 14px;
`;

const CalendarContainer: React.FC = () => {
  const months: React.ReactNodeArray = [];
  useHolidaysFetchAndDispatch();

  for (let i = 0; i < 12; i++) {
    months.push(<CalendarMonth key={i} monthIndex={i} />);
  }

  return (
    <Wrapper>
      <CalendarHeader />
      <WeekendColumns />
      {months}
    </Wrapper>
  );
};

export default CalendarContainer;
