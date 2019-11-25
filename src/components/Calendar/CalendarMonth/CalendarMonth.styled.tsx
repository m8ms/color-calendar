import React from "react";
import styled from "styled-components";
import { CALENDAR_PADDING } from "../../../styles/consts";

export const StyledMonthLabel = styled.div<IndexedProps>`
  grid-column: 1 / 2;
  grid-row: ${({ index }) => `${index + 2} / span 1`};
  height: 28px;
  margin-left: -${CALENDAR_PADDING};
  padding-left: ${CALENDAR_PADDING};
  padding-right: ${CALENDAR_PADDING};
  display: flex;
  align-items: center;
  div:hover + & {
    background: ${({ theme }) => theme.darkHighlightBg};
  }
`;
