import React from "react";
import { lastDayOfMonth } from "date-fns";
import DayCell from "../DayCell";
import { holidaysSelector } from "../../../store/selectors/holidaysSelectors";
import { useSelector } from "react-redux";

interface DayCellsProps {
  month: Date;
}

const DayCells: React.FC<DayCellsProps> = ({ month }) => {
  const monthLength: number = lastDayOfMonth(month).getDate();
  const weekdayOffset: number = month.getDay();
  const cells: React.ReactNodeArray = [];

  for (let i = 0; i < monthLength; i++) {
    cells.push(
      <DayCell
        key={i}
        dayOfMonth={i + 1}
        weekdayOffset={weekdayOffset}
        month={month}
      />
    );
  }
  return <>{cells}</>;
};

export default DayCells;
