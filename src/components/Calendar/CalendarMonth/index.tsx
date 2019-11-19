import React from "react";
import { enGB } from "date-fns/locale";
import CalendarStripe from "../CalendarStripe";
import { StyledMonthLabel } from "./CalendarMonth.styled";

interface CalendarMonthProps {
  monthIndex: number;
  year: number;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({ monthIndex, year }) => (
  <>
    <CalendarStripe monthIndex={monthIndex} year={year} />
    <StyledMonthLabel index={monthIndex}>
      {enGB.localize.month(monthIndex)}
    </StyledMonthLabel>
  </>
);

export default CalendarMonth;
