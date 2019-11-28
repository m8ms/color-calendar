import { apiGet } from "./common";

export interface allColorsResponseIF {
  data: RawColor[];
}

export function getColors(): Promise<allColorsResponseIF> {
  return apiGet("/colors");
}
