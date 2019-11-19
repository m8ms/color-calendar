import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

const devtools = () =>
  process.env.NODE_ENV !== "production" &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__();

// @ts-ignore
export default createStore(rootReducer, devtools());
