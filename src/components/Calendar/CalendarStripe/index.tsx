import React from "react";
import { lastDayOfMonth } from "date-fns";
import DayCells from "../DayCells";
import { StyledStripe, StyledStripeWrapper } from "./CalendarStripe.styled";

interface CalendarStripeProps {
  monthIndex: number;
  year: number;
}

const CalendarStripe: React.FC<CalendarStripeProps> = ({
  monthIndex,
  year
}) => {
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
