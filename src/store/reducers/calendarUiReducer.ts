import { Reducer } from "react";
import { handleActions } from "redux-actions";
import { setColor, setYear } from "../actions/calendarUiActions";

interface CalendarUiState {
  selectedYear: number;
  selectedColor: Color | null;
}

const initialState: CalendarUiState = {
  selectedYear: new Date().getFullYear(),
  selectedColor: null
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
    },
    [`${setColor}`]: (state, action: ReturnType<typeof setColor>) => {
      if (state.selectedColor === action.payload) {
        return state;
      }
      return {
        ...state,
        selectedColor: action.payload
      };
    }
  },
  initialState
);
export default calendarUiReducer;
