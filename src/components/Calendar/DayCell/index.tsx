import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { isToday } from "date-fns";
import { StyledDayCell } from "./DayCell.styled";
import { singleHolidaySelector } from "../../../store/selectors/holidaysSelectors";
import { singleColorSelector } from "../../../store/selectors/colorsPerFolkSelectors";

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
  const { folkId } = useParams();
  const nationalHoliday = useSelector(singleHolidaySelector(date));
  const isHoliday = (dayOfMonth + weekdayOffset) % 7 < 2 || nationalHoliday;
  const color = useSelector(singleColorSelector(folkId, date));
  const title = (color && color.name) || nationalHoliday;

  return (
    <StyledDayCell
      isHoliday={isHoliday}
      isToday={isToday(date)}
      title={title}
      color={color && color.hex}
      isEditable={!!folkId}
    >
      {dayOfMonth}
    </StyledDayCell>
  );
};

export default DayCell;
