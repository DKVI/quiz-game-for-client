/** @format */

import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  whitelist: ["name", "scores", "questionsList", "itemId", "random"],
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
