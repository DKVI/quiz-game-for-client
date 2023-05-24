/** @format */

import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistConfig = {
  ...commonConfig,
  whitelist: ["name", "scores", "questionsList", "random"],
  key: "root",
};

const pReducer = persistReducer(persistConfig, reducer);

const reduxConfig = () => {
  const store = createStore(
    pReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default reduxConfig;
