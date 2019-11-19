import React, { useMemo } from "react";
import { StyledDottedLine, StyledWeekendColumn } from "./WeekendColumns.styled";

const Cols: React.FC<IndexedProps> = ({ index }) => (
  <>
    <StyledWeekendColumn index={index} />
    <StyledDottedLine index={index} />
  </>
);

const WeekendColumns: React.FC = () => {
  const columns: React.ReactNodeArray = useMemo(
    () => [0, 1, 2, 3, 4].map(i => <Cols key={i} index={i} />),
    []
  );
  return <>{columns}</>;
};

export default WeekendColumns;
