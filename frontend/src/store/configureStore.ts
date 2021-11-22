import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { meReducer } from "./me";
import { api } from "./middleware/api";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const entitiesReducer = combineReducers({
  me: meReducer,
})

const reducer = combineReducers({
  entities: entitiesReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    // .concat(logger)
    .concat(api)
    ,
})

export let persistor = persistStore(store)



