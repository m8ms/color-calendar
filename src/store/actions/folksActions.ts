import { createAction } from "redux-actions";

export const setFolks = createAction<FolksMap | {} | null>("cc/folks/setFolks");
