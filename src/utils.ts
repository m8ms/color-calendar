export const getSundayBg = ({ index, theme }): string =>
  (index + 1) % 7 ? "transparent" : theme.darkHighlightBg;

export const findSelectValue = (values, val): SelectOption =>
  values.find(({ value }) => value === val);
