import { combineReducers } from "redux";

import holidays from "./holidaysReducer";
import folks from "./folksReducer";
import colors from "./colorsReducer";
import colorsPerFolk from "./colorsPerFolkReducer";
import calendarUi from "./calendarUiReducer";

export const rootReducer = combineReducers({
  holidays,
  folks,
  colors,
  colorsPerFolk,
  calendarUi
});

export type AppState = ReturnType<typeof rootReducer>;
