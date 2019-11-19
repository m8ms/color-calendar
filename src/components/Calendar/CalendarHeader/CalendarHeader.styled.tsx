import React from "react";
import styled from "styled-components";
import { CALENDAR_PADDING } from "../../../styles/consts";

export const StyledHeaderCell = styled.header<IndexedProps>`
  grid-column: ${({ index }) => `${index + 2} / span 1`};
  grid-row: 1 / 2;
  text-align: center;
  padding: ${CALENDAR_PADDING} 0;
`;
