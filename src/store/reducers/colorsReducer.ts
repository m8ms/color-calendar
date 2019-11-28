import { Reducer } from "react";
import { handleActions } from "redux-actions";
import { setColors } from "../actions/colorsActions";
import { convertRawIds } from "../../utils";

type ColorsState = Color[] | null;

const initialState: ColorsState = null;

const colorsReducer: Reducer<ColorsState, any> = handleActions<any>(
  {
    [`${setColors}`]: (state, action: ReturnType<typeof setColors>) =>
      convertRawIds(action.payload)
  },
  initialState
);
export default colorsReducer;
