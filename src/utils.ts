export const getSundayBg = ({ index, theme }): string =>
  (index + 1) % 7 ? "transparent" : theme.darkHighlightBg;

export const getSimpleToday = (): SimpleDate => {
  const now = new Date();

  return {
    y: now.getFullYear(),
    m: now.getMonth(),
    d: now.getDate()
  };
};
