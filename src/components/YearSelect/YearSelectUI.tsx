import { SelectWrapper } from "../CalendarToolbar/CalendarToolbar.styled";
import ThemedSelect from "../ThemedSelect";
import React from "react";

interface YearSelectUIProps {
  value: SelectOption;
  options: SelectOption[];
  onChange: (item: SelectOption) => any;
}

const YearSelect: React.FC<YearSelectUIProps> = ({
  value,
  onChange,
  options
}) => (
  <SelectWrapper>
    <ThemedSelect
      options={options}
      autosize
      isSearchable={false}
      value={value}
      onChange={onChange}
    />
  </SelectWrapper>
);
