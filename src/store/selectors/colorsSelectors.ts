import { getState } from "../";

const getColors = (): Color[] => getState().colors;

export const colorsSelector = (): Color[] | undefined => {
  return getColors();
};
