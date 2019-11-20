import { getState } from "../";
import { path } from "ramda";
import { format } from "date-fns";

const getHolidays = (): HolidaysMap => getState().holidays;

export const holidaysSelector = (
  year: number | string
): Function => (): Holidays => getHolidays()[year.toString()];

export const singleHolidaySelector = (date: Date): Function => ():
  | string
  | undefined => {
  return path([date.getFullYear(), format(date, "MM-dd")], getHolidays());
};
