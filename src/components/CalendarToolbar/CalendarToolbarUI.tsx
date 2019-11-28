import React from "react";
import { FolkSelectWrapper, Wrapper } from "./CalendarToolbar.styled";
import ColorsSelect from "../ColorsSelect";
import YearSelect from "../YearSelect";
import { findSelectValue } from "../../utils";
import ThemedSelect from "../ThemedSelect";

interface CalendarToolbarUIProps {
  onFolkSelect: (item: SelectOption) => any;
  folks: Folk[] | null;
  currentFolkId: string | undefined;
}

const CalendarToolbarUI: React.FC<CalendarToolbarUIProps> = ({
  folks,
  currentFolkId,
  onFolkSelect
}) => {
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
      <YearSelect />
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
