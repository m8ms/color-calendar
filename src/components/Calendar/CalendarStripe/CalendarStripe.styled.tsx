import React from "react";
import styled from "styled-components";
import { CALENDAR_PADDING } from "../../../styles/consts";

interface StripeProps {
  offset: number;
  length: number;
  monthIndex: number;
}

const StyledCalendarRow = styled.div<StripeProps>`
  grid-row: ${({ monthIndex }) => `${monthIndex + 2} / span 1`};
  display: grid;
`;

export const StyledStripe = styled(StyledCalendarRow)`
  grid-column: ${({ offset, length }) => `${offset + 1} / span ${length}`};
  background: white;
  margin: ${CALENDAR_PADDING} 0;
  height: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  grid-template-columns: repeat(${({ length }) => length}, 1fr);
`;

export const StyledStripeWrapper = styled(StyledCalendarRow)`
  grid-column: ${({ offset, length }) => `2 / span ${length + offset}`};
  margin-right: -${CALENDAR_PADDING};
  padding-right: ${CALENDAR_PADDING};
  grid-template-columns: repeat(
    ${({ length, offset }) => length + offset},
    1fr
  );
  &:hover {
    background: ${({ theme }) => theme.darkHighlightBg};
  }
`;
