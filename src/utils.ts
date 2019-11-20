export const getSundayBg = ({ index, theme }): string =>
  (index + 1) % 7 ? "transparent" : theme.darkHighlightBg;
