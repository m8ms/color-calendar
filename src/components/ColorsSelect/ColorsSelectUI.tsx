import React from "react";
import ThemedSelect from "../ThemedSelect";
import {
  ColorSelectWrapper,
  StyledColorBox,
  StyledColorOption
} from "./ColorsSelect.styled";

const formatOptionLabel = ({ label }) => {
  return (
    <StyledColorOption>
      <StyledColorBox color={label.hex} />
      {label.name}
    </StyledColorOption>
  );
};

type ColorsSelectOption = {
  //TODO extend SelectOption
  label: {
    hex: string;
    name: string;
  };
  value: string;
};

interface ColorsSelectUIInterface {
  options: ColorsSelectOption[];
  onChange: (any) => void; //TODO
  value: ColorsSelectOption | null;
}

const ColorsSelectUI: React.FC<ColorsSelectUIInterface> = ({
  options,
  value,
  onChange
}) => {
  return (
    <ColorSelectWrapper>
      <ThemedSelect
        options={options}
        autosize
        isSearchable={false}
        onChange={onChange}
        value={value}
        formatOptionLabel={formatOptionLabel}
      />
    </ColorSelectWrapper>
  );
};

export default ColorsSelectUI;
