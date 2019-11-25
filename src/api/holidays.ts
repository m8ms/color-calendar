import { apiGet } from "./common";

export function getHolidays(year: number | string): Promise<Holidays> {
  return apiGet("/holidays/" + year);
}
