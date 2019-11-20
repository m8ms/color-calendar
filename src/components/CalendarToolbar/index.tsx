import React, { useCallback } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { selectedYearSelector } from "../../store/selectors/calendarUiSelectors";
import { setYear } from "../../store/actions/calendarUiActions";
import { SelectWrapper, Wrapper } from "./CalendarToolbar.styled";
import reactSelectTheme from "../../styles/reactSelectTheme";

type YearSelectOption = {
  value: number;
  label: string;
};

const calendarOptions: YearSelectOption[] = [];

for (let i = 2019; i < 2051; i++) {
  calendarOptions.push({ value: i, label: i.toString() });
}

const CalendarToolbar: React.FC = () => {
  const dispatch = useDispatch();
  const year: number = useSelector(selectedYearSelector);
  const selectedValue: YearSelectOption = calendarOptions.find(
    ({ value }) => value === year
  );

  const onChange = useCallback(
    ({ value }) => {
      dispatch(setYear(value));
    },
    [dispatch]
  );

  return (
    <Wrapper>
      <SelectWrapper>
        <Select
          options={calendarOptions}
          autosize
          theme={reactSelectTheme}
          isSearchable={false}
          value={selectedValue}
          onChange={onChange}
        />
      </SelectWrapper>
    </Wrapper>
  );
};

export default CalendarToolbar;
