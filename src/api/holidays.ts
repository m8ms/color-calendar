import { apiGet } from "./common";

export interface HolidaysResponseIF {
  data: Holidays;
}

export function getHolidays(
  year: number | string
): Promise<HolidaysResponseIF> {
  return apiGet("/holidays/" + year);
}
