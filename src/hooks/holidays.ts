import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedYearSelector } from "../store/selectors/calendarUiSelectors";
import { holidaysSelector } from "../store/selectors/holidaysSelectors";
import { getHolidays, HolidaysResponseIF } from "../api/holidays";
import { setHolidays } from "../store/actions/holidaysActions";
import { fetchAndDispatch } from "../utils";

export const useHolidaysFetchAndDispatch = (): Holidays => {
  const year = useSelector(selectedYearSelector);
  const holidays = useSelector(holidaysSelector(year));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!holidays) {
      fetchAndDispatch(
        () => getHolidays(year),
        data => setHolidays({ [year.toString()]: data }),
        dispatch
      );
    }
  }, [year, holidays]);

  return holidays;
};
