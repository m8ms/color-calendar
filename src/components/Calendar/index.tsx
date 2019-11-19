import React from "react";
import styled from "styled-components";
import CalendarHeader from "./CalendarHeader";
import CalendarMonth from "./CalendarMonth";
import WeekendColumns from "./WeekendColumns";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: max-content repeat(38, 1fr);
  font-size: 14px;
`;

const Calendar: React.FC = () => {
  const months: React.ReactNodeArray = [];

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

export default Calendar;
