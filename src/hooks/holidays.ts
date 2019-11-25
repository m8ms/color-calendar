import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedYearSelector } from "../store/selectors/calendarUiSelectors";
import { holidaysSelector } from "../store/selectors/holidaysSelectors";
import { getHolidays } from "../api/holidays";
import { setHolidays } from "../store/actions/holidaysActions";

export const useHolidaysFetchAndDispatch = (): Holidays => {
  const year = useSelector(selectedYearSelector);
  const holidays = useSelector(holidaysSelector(year));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!holidays) {
      (async () => {
        const h: Holidays = await getHolidays(year);
        dispatch(setHolidays({ [year.toString()]: h.data }));
      })();
    }
  }, [year, holidays]);

  return holidays;
};
