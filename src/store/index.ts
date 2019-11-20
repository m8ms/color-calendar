import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

const devtools = () =>
  process.env.NODE_ENV !== "production" &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devtools());

export const getState = () => store.getState();
export default store;
