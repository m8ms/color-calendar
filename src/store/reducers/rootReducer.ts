import { combineReducers } from "redux";

import holidays from "./holidaysReducer";
import calendarUi from "./calendarUiReducer";

export const rootReducer = combineReducers({
  holidays,
  calendarUi
});

export type AppState = ReturnType<typeof rootReducer>;
