import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import listSlice from "../slices/slice"
const rootReducer = combineReducers({
  objective: listSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whiteList: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});


export let persistStor = persistStore(store);
