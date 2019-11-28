import { createAction } from "redux-actions";

export const setColorsPerFolk = createAction<ColorsPerFolkMap | {} | null>(
  "cc/colors/setColorsPerFolk"
);
