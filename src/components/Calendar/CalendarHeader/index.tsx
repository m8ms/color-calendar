import React, { useMemo } from "react";
import { enGB } from "date-fns/locale";
import { StyledHeaderCell } from "./CalendarHeader.styled";

const CalendarHeader: React.FC = () => {
  const cells: React.ReactNodeArray = useMemo(() => {
    const c = [];

    for (let i = 0; i < 38; i++) {
      c.push(
        <StyledHeaderCell key={i} index={i}>
          {enGB.localize.day((i + 1) % 7).substr(0, 2)}
        </StyledHeaderCell>
      );
    }

    return c;
  }, []);

  return <>{cells}</>;
};

export default CalendarHeader;
