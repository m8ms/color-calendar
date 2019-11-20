import store from "../";

export const selectedYearSelector = (): number =>
  store.getState().calendarUi.selectedYear;
