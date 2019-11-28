import React, { useCallback } from "react";
import ColorsSelectUI from "./ColorsSelectUI";
import { useSelector, useDispatch } from "react-redux";
import { useColorsFetchAndDispatch } from "../../hooks/colors";
import { currentColorSelector } from "../../store/selectors/calendarUiSelectors";
import { setColor } from "../../store/actions/calendarUiActions";

const mapToOptions = ({ id, name, hex }) => ({
  label: { name, hex },
  value: id
});

const ColorsSelectContainer: React.FC = () => {
  const colors = useColorsFetchAndDispatch() || [];
  const colorsOptions = colors.map(mapToOptions);
  const currentColor = useSelector(currentColorSelector);
  const dispatch = useDispatch();
  const currentValue = currentColor
    ? colorsOptions.find(({ value }) => value === currentColor.id)
    : null;

  const onChange = ({ value }) => {
    const color = colors.find(({ id }) => id === value);
    dispatch(setColor(color));
  };

  return (
    <ColorsSelectUI
      options={colorsOptions}
      value={currentValue}
      onChange={onChange}
    />
  );
};

export default ColorsSelectContainer;
