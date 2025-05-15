// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import loginReducer from "./slices/loginFormSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

// 1) описываем, что и куда сохраняем
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],   // сохраняем только login
};

// 2) комбинируем все слайсы в один редьюсер
const rootReducer = combineReducers({
  login: loginReducer,
});

// 3) оборачиваем этот корневой редьюсер в persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4) создаём стор на базе persistedReducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: {
        // чтобы redux-persist не жаловался на нестандартные экшены
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);