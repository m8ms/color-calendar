import { combineReducers } from "redux";

import holidays from "./holidaysReducer";
import folks from "./folksReducer";
import calendarUi from "./calendarUiReducer";

export const rootReducer = combineReducers({
  holidays,
  folks,
  calendarUi
});

export type AppState = ReturnType<typeof rootReducer>;
