import axios from "axios";

export const apiGet = (url: string): Promise<any> =>
  axios.get(process.env.API_URL + url);
