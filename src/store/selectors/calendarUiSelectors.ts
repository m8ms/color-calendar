import store from "../";

export const selectedYearSelector = (): number =>
  store.getState().calendarUi.selectedYear;

export const todaySelector = (): SimpleDate =>
  store.getState().calendarUi.today;
