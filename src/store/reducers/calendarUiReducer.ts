import { Reducer } from "react";
import { handleActions } from "redux-actions";
import { setYear } from "../actions/calendarUiActions";

interface CalendarUiState {
  selectedYear: number;
}

const initialState: CalendarUiState = {
  selectedYear: new Date().getFullYear()
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
