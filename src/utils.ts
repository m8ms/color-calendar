export const getSundayBg = ({ index, theme }): string =>
  (index + 1) % 7 ? "transparent" : theme.darkHighlightBg;

export const findSelectValue = (values, val): SelectOption =>
  values.find(({ value }) => value === val);

export const fetchAndDispatch = async (
  fetcher: () => Promise<any>,
  action: Function,
  dispatch: Function
): Promise<any> => {
  const response = await fetcher();
  dispatch(action(response.data));
};

export const convertRawIds = (arr: RawData[]): any[] =>
  arr.map(({ _id, ...other }) => {
    if (_id) return { id: _id, ...other };
    return other;
  });
