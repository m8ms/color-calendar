import { getState } from "../";

const getFolks = (): Folk[] => getState().folks;

export const allFolksSelector = (): Folk[] => getFolks();

// export const singleFolkSelector = (): Function => (id: string): Folk =>
//   getFolks()[id];
