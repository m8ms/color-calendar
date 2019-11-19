import React from "react";
import styled from "styled-components";
import { getSundayBg } from "../../../utils";
import { CALENDAR_PADDING, ZINDEX } from "../../../styles/consts";

const StyledColumn = styled.div<IndexedProps>`
  grid-column: ${({ index }) => `${index * 7 + 8} / span 1`};
  grid-row: 1 / 14;
  margin-bottom: ${CALENDAR_PADDING};
`;

export const StyledWeekendColumn = styled(StyledColumn)`
  background: ${({ theme }) => getSundayBg({ theme, index: 6 })};
`;

export const StyledDottedLine = styled(StyledColumn)`
  border-right: dotted 1px black;
  pointer-events: none;
  z-index: ${ZINDEX.CALENDAR_GRID};
`;
