import React from "react";
import ThemedSelect from "../ThemedSelect";
import { SelectWrapper } from "../../styles/common.styled";

interface YearSelectUIProps {
  value: SelectOption;
  options: SelectOption[];
  onChange: (item: SelectOption) => any;
}

const YearSelectUI: React.FC<YearSelectUIProps> = ({
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

export default YearSelectUI;
