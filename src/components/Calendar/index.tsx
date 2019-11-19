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

interface IFCalendarContext {
  today: SimpleDate;
}

export const CalendarContext = React.createContext<IFCalendarContext>(null);

interface CalendarProps {
  year?: number;
}

const Calendar: React.FC<CalendarProps> = ({
  year = new Date().getFullYear()
}) => {
  const now = new Date();
  const today: SimpleDate = {
    y: now.getFullYear(),
    m: now.getMonth(),
    d: now.getDate()
  };
  const months: React.ReactNodeArray = [];

  for (let i = 0; i < 12; i++) {
    months.push(<CalendarMonth key={i} monthIndex={i} year={year} />);
  }

  return (
    <Wrapper>
      <CalendarContext.Provider value={{ today }}>
        <CalendarHeader />
        <WeekendColumns />
        {months}
      </CalendarContext.Provider>
    </Wrapper>
  );
};

export default Calendar;
