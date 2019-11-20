import axios from "axios";

const apiGet = (url: string): Promise<any> =>
  axios.get(process.env.API_URL + url);

export function getHolidays(year: number | string): Promise<Holidays> {
  return apiGet("/holidays/" + year);
}
