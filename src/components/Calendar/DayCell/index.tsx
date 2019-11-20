import React from "react";
import { useSelector } from "react-redux";
import { StyledDayCell } from "./DayCell.styled";
import { singleHolidaySelector } from "../../../store/selectors/holidaysSelectors";
import { isToday } from "date-fns";

interface DayCellProps {
  dayOfMonth: number;
  weekdayOffset: number;
  month: Date;
}

const DayCell: React.FC<DayCellProps> = ({
  dayOfMonth,
  weekdayOffset,
  month
}) => {
  const date = new Date(month);
  date.setDate(dayOfMonth);
  const nationalHoliday = useSelector(singleHolidaySelector(date));
  const isHoliday = (dayOfMonth + weekdayOffset) % 7 < 2;
  return (
    <StyledDayCell
      isHoliday={isHoliday || nationalHoliday}
      isToday={isToday(date)}
      title={nationalHoliday}
    >
      {dayOfMonth}
    </StyledDayCell>
  );
};

export default DayCell;
