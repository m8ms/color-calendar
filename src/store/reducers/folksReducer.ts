import { Reducer } from "react";
import { handleActions } from "redux-actions";
import { setFolks } from "../actions/folksActions";
import { convertRawIds } from "../../utils";

const initialState: Folk[] = null;

const folksReducer: Reducer<Folk[], any> = handleActions<any>(
  {
    [`${setFolks}`]: (state, action: ReturnType<typeof setFolks>) =>
      convertRawIds(action.payload)
  },
  initialState
);
export default folksReducer;
