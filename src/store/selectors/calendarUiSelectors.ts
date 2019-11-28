import store from "../";

export const selectedYearSelector = (): number =>
  store.getState().calendarUi.selectedYear;

export const currentColorSelector = (): Color =>
  store.getState().calendarUi.selectedColor;
