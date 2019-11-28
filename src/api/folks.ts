import { apiGet } from "./common";

export interface allFolksResponseIF {
  data: RawFolk[];
}

export interface oneFolkResponseIF {
  data: RawFolk;
}

export function getFolks(): Promise<allFolksResponseIF> {
  return apiGet("/folks");
}

export function getFolk(folkId: string): Promise<oneFolkResponseIF> {
  return apiGet("/folks/" + folkId);
}
