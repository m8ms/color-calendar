import { apiGet } from "./common";

export function getFolks(): Promise<FolksMap> {
  return apiGet("/folks");
}
