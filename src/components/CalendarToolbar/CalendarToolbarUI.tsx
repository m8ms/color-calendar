import React from "react";
import Select from "react-select";
import {
  FolkSelectWrapper,
  SelectWrapper,
  Wrapper
} from "./CalendarToolbar.styled";
import reactSelectTheme from "../../styles/reactSelectTheme";
import { findSelectValue } from "../../utils";

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
      <SelectWrapper>
        <Select
          options={yearSelectOptions}
          autosize
          theme={reactSelectTheme}
          isSearchable={false}
          value={selectedYear}
          onChange={onYearSelect}
        />
      </SelectWrapper>
      <FolkSelectWrapper>
        <Select
          options={folksOptions}
          autosize
          theme={reactSelectTheme}
          onChange={onFolkSelect}
          value={selectedFolk}
        />
      </FolkSelectWrapper>
    </Wrapper>
  );
};

export default CalendarToolbarUI;
