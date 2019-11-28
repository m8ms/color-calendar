import React from "react";
import styled, { css } from "styled-components";

interface StyledDayCellProps {
  isHoliday: boolean;
  isToday: boolean;
  isEditable: boolean;
  color: string;
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

export const StyledDayCell = styled.div<StyledDayCellProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  ${({ isEditable }) =>
    isEditable &&
    css`
      cursor: pointer;
    `};
  color: ${({ theme }) => theme.textDimmedColor};
  background: ${({ isHoliday, theme, color }) => {
    if (color) return color;
    return isHoliday ? theme.darkHighlightBg : "transparent";
  }};

  ${({ isToday }) => isToday && isTodayCss}
`;
