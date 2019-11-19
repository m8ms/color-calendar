import React from "react";
import { lastDayOfMonth } from "date-fns";
import { useSelector } from "react-redux";
import { StyledDayCell } from "./DayCells.styled";
import { todaySelector } from "../../../store/selectors/calendarUiSelectors";

const isToday = (date: Date, day: number, today: SimpleDate): boolean => {
  const { d, m, y } = today;
  return day === d && date.getMonth() === m && date.getFullYear() === y;
};

interface DayCellsProps {
  month: Date;
}

const DayCells: React.FC<DayCellsProps> = ({ month }) => {
  const monthLength: number = lastDayOfMonth(month).getDate();
  const weekdayOffset: number = month.getDay();
  const cells: React.ReactNodeArray = [];
  const today = useSelector(todaySelector);

  for (let i = 0; i < monthLength; i++) {
    cells.push(
      <StyledDayCell
        key={i}
        isHoliday={(i + weekdayOffset + 1) % 7 < 2}
        isToday={isToday(month, i, today)}
      >
        {i + 1}
      </StyledDayCell>
    );
  }
  return <>{cells}</>;
};

export default DayCells;
