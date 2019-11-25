import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { selectedYearSelector } from "../../store/selectors/calendarUiSelectors";
import { setYear } from "../../store/actions/calendarUiActions";
import CalendarToolbarUI from "./CalendarToolbarUI";
import { useGetOrFetchFolks } from "../../hooks/folks";

const CalendarToolbar: React.FC = () => {
  const dispatch = useDispatch();
  const year: number = useSelector(selectedYearSelector);
  const folks: Folk[] | null = useGetOrFetchFolks();
  const { folkId } = useParams();
  const history = useHistory();

  const onYearSelect = useCallback(({ value }) => {
    dispatch(setYear(value));
  }, []);

  const onFolkSelect = useCallback(({ value }) => {
    history.push("/c/" + (value || ""));
  }, []);

  return (
    <CalendarToolbarUI
      year={year}
      onYearSelect={onYearSelect}
      onFolkSelect={onFolkSelect}
      folks={folks}
      currentFolkId={folkId}
    />
  );
};

export default CalendarToolbar;
