import React, { useCallback } from "react";
import YearSelectUI from "./YearSelectUI";
import { useSelector, useDispatch } from "react-redux";
import { useColorsFetchAndDispatch } from "../../hooks/colors";
import {
  currentColorSelector,
  selectedYearSelector
} from "../../store/selectors/calendarUiSelectors";
import { setColor, setYear } from "../../store/actions/calendarUiActions";
import { findSelectValue } from "../../utils";

const yearSelectOptions: SelectOption[] = [];

for (let i = 2019; i < 2051; i++) {
  yearSelectOptions.push({ value: i, label: i.toString() });
}

const mapToOptions = ({ id, name, hex }) => ({
  label: { name, hex },
  value: id
});

const YearSelectContainer: React.FC = () => {
  const dispatch = useDispatch();

  const year: number = useSelector(selectedYearSelector);
  const selectedYear: SelectOption = findSelectValue(yearSelectOptions, year);

  const onChange = useCallback(({ value }) => {
    dispatch(setYear(value));
  }, []);

  return (
    <YearSelectUI
      options={yearSelectOptions}
      value={selectedYear}
      onChange={onChange}
    />
  );
};

export default YearSelectContainer;
