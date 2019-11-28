import { Reducer } from "react";
import { handleActions } from "redux-actions";
import { setColorsPerFolk } from "../actions/colorsPerFolkActions";

interface ColorsState extends ColorsPerFolkMap {}

const initialState: ColorsState = {};

const colorsPerFolkReducer: Reducer<ColorsState, any> = handleActions<any>(
  {
    [`${setColorsPerFolk}`]: (
      state,
      action: ReturnType<typeof setColorsPerFolk>
    ) => ({
      ...state,
      ...action.payload
    })
  },
  initialState
);
export default colorsPerFolkReducer;
