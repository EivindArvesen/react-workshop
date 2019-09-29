import { createStore, compose } from "redux";
import rootReducer from "./rootReducer";

const initialState = {};
const enhancers = [];

// If we're in development, enable the 'Redux dev tools' browser extension
if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  ...enhancers
);

// Create the Redux store
const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
