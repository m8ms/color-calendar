import React from "react";
import {
  FolkSelectWrapper,
  SelectWrapper,
  Wrapper
} from "./CalendarToolbar.styled";
import ColorsSelect from "../ColorsSelect";
import { findSelectValue } from "../../utils";
import ThemedSelect from "../ThemedSelect";

const yearSelectOptions: SelectOption[] = [];

for (let i = 2019; i < 2051; i++) {
  yearSelectOptions.push({ value: i, label: i.toString() });
}

interface CalendarToolbarUIProps {
  year: number;
  onYearSelect: (item: SelectOption) => any;
  onFolkSelect: (item: SelectOption) => any;
  folks: Folk[] | null;
  currentFolkId: string | undefined;
}

const CalendarToolbarUI: React.FC<CalendarToolbarUIProps> = ({
  onYearSelect,
  year,
  folks,
  currentFolkId,
  onFolkSelect
}) => {
  const selectedYear: SelectOption = findSelectValue(yearSelectOptions, year);

  const folksOptions: SelectOption[] = folks
    ? folks.map(({ id, name }) => ({
        value: id,
        label: name
      }))
    : [];

  const selectedFolk: SelectOption = findSelectValue(
    folksOptions,
    currentFolkId
  );
  return (
    <Wrapper>
      <YearSelect value={selectedYear} onChange={onYearSelect} />
      <ColorsSelect />
      <FolkSelectWrapper>
        <ThemedSelect
          options={folksOptions}
          autosize
          onChange={onFolkSelect}
          value={selectedFolk}
        />
      </FolkSelectWrapper>
    </Wrapper>
  );
};

export default CalendarToolbarUI;
