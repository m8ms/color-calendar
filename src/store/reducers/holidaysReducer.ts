import { Reducer } from "react";
import { handleActions } from "redux-actions";
import { setHolidays } from "../actions/holidaysActions";

interface HolidaysState extends HolidaysMap {}

const initialState: HolidaysState = {};

const holidaysReducer: Reducer<HolidaysState, any> = handleActions<any>(
  {
    [`${setHolidays}`]: (state, action: ReturnType<typeof setHolidays>) => ({
      ...state,
      ...action.payload
    })
  },
  initialState
);
export default holidaysReducer;
