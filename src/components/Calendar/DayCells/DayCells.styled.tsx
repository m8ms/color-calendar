import React from "react";
import styled, { css } from "styled-components";

interface DayCellProps {
  isHoliday: boolean;
  isToday: boolean;
}

export const isTodayCss = css`
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -2px;
    right: 0;
    bottom: -2px;
    left: 0;
    border: 2px solid ${({ theme }) => theme.darkBorderColor};
    border-radius: 4px;
  }
`;

export const StyledDayCell = styled.div<DayCellProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${({ theme }) => theme.textDimmedColor};
  background: ${({ isHoliday, theme }) =>
    isHoliday ? theme.darkHighlightBg : "transparent"};

  ${({ isToday }) => isToday && isTodayCss}
`;
