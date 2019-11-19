import React, { useCallback } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { selectedYearSelector } from "../../store/selectors/calendarUiSelectors";
import { setYear } from "../../store/actions/calendarUiActions";
import { SelectWrapper, Wrapper } from "./CalendarToolbar.styled";
import reactSelectTheme from "../../styles/reactSelectTheme";

const calendarOptions = [
  { value: 2019, label: "2019" },
  { value: 2020, label: "2020" },
  { value: 2021, label: "2021" }
];

const CalendarToolbar: React.FC = () => {
  const dispatch = useDispatch();
  const year: number = useSelector(selectedYearSelector);
  const selectedValue = calendarOptions.find(({ value }) => value === year);

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
