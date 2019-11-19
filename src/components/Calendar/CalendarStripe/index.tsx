import React from "react";
import { useSelector } from "react-redux";
import { lastDayOfMonth } from "date-fns";

import DayCells from "../DayCells";
import { StyledStripe, StyledStripeWrapper } from "./CalendarStripe.styled";
import { selectedYearSelector } from "../../../store/selectors/calendarUiSelectors";

interface CalendarStripeProps {
  monthIndex: number;
}

const CalendarStripe: React.FC<CalendarStripeProps> = ({ monthIndex }) => {
  const year = useSelector(selectedYearSelector);
  const currentMonth = new Date(year, monthIndex);
  const monthOffset = (currentMonth.getDay() + 6) % 7;
  const monthLength = lastDayOfMonth(currentMonth).getDate();

  return (
    <StyledStripeWrapper
      monthIndex={monthIndex}
      offset={monthOffset}
      length={monthLength}
    >
      <StyledStripe
        monthIndex={monthIndex}
        offset={monthOffset}
        length={monthLength}
      >
        <DayCells month={currentMonth} />
      </StyledStripe>
    </StyledStripeWrapper>
  );
};

export default CalendarStripe;
