import { createAction } from "redux-actions";

export const setColors = createAction<Color[] | null>(
  "cc/colorsPerFolk/setColors"
);
