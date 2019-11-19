import { Reducer } from "react";
import { handleActions } from "redux-actions";
import { setYear } from "../actions/calendarUiActions";
import { getSimpleToday } from "../../utils";

interface CalendarUiState {
  selectedYear: number;
  today: SimpleDate;
}

const initialState: CalendarUiState = {
  selectedYear: new Date().getFullYear(),
  today: getSimpleToday()
};

const calendarUiReducer: Reducer<CalendarUiState, any> = handleActions<any>(
  {
    [`${setYear}`]: (state, action: ReturnType<typeof setYear>) => {
      if (state.selectedYear === action.payload) {
        return state;
      }
      return {
        ...state,
        selectedYear: action.payload
      };
    }
  },
  initialState
);
export default calendarUiReducer;
