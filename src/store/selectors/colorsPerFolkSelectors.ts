import { getState } from "../";
import { path } from "ramda";
import { format } from "date-fns";

const getColors = (): ColorsPerFolkMap => getState().colorsPerFolk;

export const folkColorsSelector = (folkId: string): Function => ():
  | ColorMap
  | undefined => {
  return path([folkId], getColors());
};

export const singleColorSelector = (
  folkId: string,
  date: Date
): Function => (): Color | undefined => {
  return path([folkId, format(date, "yyyy-MM-dd")], getColors());
};
